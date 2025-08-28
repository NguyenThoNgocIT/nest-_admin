import { FastifyAdapter } from '@nestjs/platform-fastify'
import fastifyMultipart from '@fastify/multipart'
import fastifyCookie from '@fastify/cookie'
import { FastifyInstance } from 'fastify'

const adapter: FastifyAdapter = new FastifyAdapter({
  trustProxy: true,
  logger: false,
})

// Lấy instance gốc từ adapter
const fastifyApp = adapter.getInstance() as FastifyInstance

fastifyApp.register(fastifyMultipart, {
  limits: {
    fields: 10,
    fileSize: 1024 * 1024 * 6,
    files: 5,
  },
})

fastifyApp.register(fastifyCookie, {
  secret: 'cookie-secret',
})

fastifyApp.addHook('onRequest', (request, reply, done) => {
  const { origin } = request.headers
  if (!origin) request.headers.origin = request.headers.host

  const { url } = request

  if (url.endsWith('.php')) {
    reply.raw.statusMessage =
      'Eh. PHP is not support on this machine. Yep, I also think PHP is bestest programming language. But for me it is beyond my reach.'
    return reply.code(418).send()
  }

  if (url.match(/favicon.ico$/) || url.match(/manifest.json$/))
    return reply.code(204).send()

  done()
})

export { adapter as fastifyApp }
