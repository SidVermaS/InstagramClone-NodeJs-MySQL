import http from 'http'
import app from './app'

const PORT=process.env.PORT || 3000

const server=http.createServer(PORT)

server.listen(PORT, ()=>    {
    console.log(`Server started on ${PORT}`)
})