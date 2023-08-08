import fastify from 'fastify'

const port: number = Number(process.env.PORT) || 3000
const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({ port }).then(() => {
  console.log('HTTP Server Running!')
})
