import fastify from 'fastify'

const port: number = Number(process.env.PORT) || 3000

fastify.listen({ port }, function (err: Error, address: string) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`Fastify is listening on port: ${address}`)
})
