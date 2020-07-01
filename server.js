import http from 'http'
import expressWs from 'express-ws'
import app from './app.js'

const PORT=process.env.PORT || 3000
const wsPORT=process.env.wsPORT || 3030

const server=http.createServer(app)
expressWs(app)
server.listen(PORT, ()=>    {
    console.log(`Server started on ${PORT}`)
})

app.listen(wsPORT,()=>	{
	 console.log(`Websocket started on ${wsPORT}`)
})