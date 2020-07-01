import express from 'express'
import expressWs from 'express-ws'

const router=express()
expressWs(router)

router.ws('/', (ws, req)=>	{
	ws.on('message', function(message)	{
		ws.send(message)		
	})
})

export default router