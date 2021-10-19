import fastify from "fastify";

const server = fastify({
    logger: true
})

server.get('/', (request, reply) => {
    reply.send('healthy!')
})

server.get('/abc', (request, reply) => {
    reply.send('xyz!')
})

server.listen(3000)