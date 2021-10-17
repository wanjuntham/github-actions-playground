import fastify from "fastify";

const server = fastify({
    logger: true
})

server.get('/', (request, reply) => {
    reply.send('healthy!')
})

server.listen(3000)