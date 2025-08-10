import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
	Logger,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ERR_CODE, IErrorRes, RES_CODE } from '../../common'
import { CoreErr } from './app-exception'

@Catch()
export class ErrorFilter implements ExceptionFilter {
	private readonly logger = new Logger(ErrorFilter.name)

	async catch(exception: unknown, host: ArgumentsHost): Promise<unknown> {
		console.log("check-exception", exception instanceof CoreErr)

		if (!(exception instanceof CoreErr)) {
			this.logger.error(
				`Error occurred: ${exception instanceof Error ? exception.message : String(exception)}`,
				{
					error:
						exception instanceof Error
							? {
								name: exception.name,
								message: exception.message,
								...((exception as any).details && {
									details: (exception as any).details,
								}),
								...((exception as any).code && {
									code: (exception as any).code,
								}),
							}
							: { rawError: exception },
					timestamp: new Date().toISOString(),
				},
			)
		}

		const res: IErrorRes = {
			statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
			message: ERR_CODE.INTERNAL_SERVER_ERROR,
			code: RES_CODE.ISE,
			t: new Date(),
		}
		if (exception instanceof HttpException) {
			res.statusCode = exception.getStatus()
			switch (exception.getStatus()) {
				case HttpStatus.NOT_FOUND:
					res.message = 'not-found'
					break

				case HttpStatus.BAD_REQUEST:
					res.message = 'bad-request'
					break

				case HttpStatus.FORBIDDEN:
					res.code = ERR_CODE.PERMISSION_DENIED
					break

				default:
					break
			}
		}

		// if (exception instanceof Prisma.PrismaClientKnownRequestError) {
		// 	switch (exception.code) {
		// 		case 'P2002': {
		// 			res.message = 'item-exists'
		// 			break
		// 		}
		// 		case 'P2025':
		// 		case 'P2003': {
		// 			res.message = 'not-found'
		// 			break
		// 		}
		// 		default:
		// 			break
		// 	}
		// }

		if (exception instanceof CoreErr) {
			res.message = exception.code
			res.code = exception.code
			res.statusCode = exception.status
			res.errors = exception.response
		}

		return host.switchToHttp().getResponse().status(HttpStatus.OK).json(res)
	}
}
