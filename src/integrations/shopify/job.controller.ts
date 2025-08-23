import { Controller, Get, Param } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { SHOPIFY_PRODUCT_QUEUE } from '~/modules/shopify/constants';
import { Public } from '~/modules/auth/decorators/public.decorator';

@Controller('jobs')
export class JobController {
    constructor(
        @InjectQueue(SHOPIFY_PRODUCT_QUEUE) private readonly queue: Queue,
    ) { }

    @Public()
    @Get('queue/status/:jobId')
    async getJobStatus(@Param('jobId') jobId: string) {
        try {
            const job = await this.queue.getJob(jobId);
            if (!job) {
                return { status: 'Job not found' };
            }

            const isCompleted = await job.isCompleted();
            const isFailed = await job.isFailed();

            // Serialize data safely
            let jobData;
            let jobResult;
            let jobError;

            try {
                jobData = JSON.parse(JSON.stringify(job.data));
            } catch (e) {
                jobData = { error: 'Cannot serialize job data' };
            }

            try {
                jobResult = isCompleted ? JSON.parse(JSON.stringify(job.returnvalue)) : null;
            } catch (e) {
                jobResult = isCompleted ? { error: 'Cannot serialize job result' } : null;
            }

            try {
                jobError = isFailed ? job.stacktrace : null;
            } catch (e) {
                jobError = isFailed ? job.failedReason : null;
            }

            return {
                id: job.id,
                progress: job.progress(),
                data: jobData,
                processedOn: job.processedOn,
                finishedOn: job.finishedOn,
                failedReason: job.failedReason,
                status: isCompleted ? 'completed' : isFailed ? 'failed' : 'pending',
                result: jobResult,
                error: jobError,
            };
        } catch (error) {
            console.error('Error getting job status:', error.message);
            return {
                error: 'Failed to get job status',
                message: error.message,
                jobId: jobId
            };
        }
    }

    @Public()
    @Get('failed')
    async getFailedJobs() {
        try {
            const jobs = await this.queue.getFailed();
            return jobs.map(job => ({
                id: job.id,
                name: job.name,
                failedReason: job.failedReason,
                processedOn: job.processedOn,
                finishedOn: job.finishedOn
            }));
        } catch (error) {
            console.error('Error getting failed jobs:', error.message);
            return { error: 'Failed to get failed jobs', message: error.message };
        }
    }

    @Public()
    @Get('completed')
    async getCompletedJobs() {
        try {
            const jobs = await this.queue.getCompleted();
            return jobs.map(job => ({
                id: job.id,
                name: job.name,
                processedOn: job.processedOn,
                finishedOn: job.finishedOn,
                progress: job.progress()
            }));
        } catch (error) {
            console.error('Error getting completed jobs:', error.message);
            return { error: 'Failed to get completed jobs', message: error.message };
        }
    }

    @Public()
    @Get('queue/stats')
    async getQueueStats() {
        try {
            const waiting = await this.queue.getWaiting();
            const active = await this.queue.getActive();
            const completed = await this.queue.getCompleted();
            const failed = await this.queue.getFailed();

            return {
                waiting: waiting.length,
                active: active.length,
                completed: completed.length,
                failed: failed.length,
                total: waiting.length + active.length + completed.length + failed.length
            };
        } catch (error) {
            console.error('Error getting queue stats:', error.message);
            return { error: 'Failed to get queue stats', message: error.message };
        }
    }
}