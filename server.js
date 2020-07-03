import http from 'http'
import app from './app.js'
import WebSocket from 'ws'

const PORT=process.env.PORT || 3000

const server=http.createServer(app)

const wss=new WebSocket.Server({ server: server })

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
	
    wss.clients.forEach(function each(client) {
      //if (client !== ws && client.readyState === WebSocket.OPEN) {
	  if (client.readyState === WebSocket.OPEN) {		
		console.log('data: ',data)
        client.send(data);
      }
    });
  });
})

server.listen(PORT, ()=>    {
    console.log(`Server started on ${PORT}`)
})
