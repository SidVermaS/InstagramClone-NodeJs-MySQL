import express from 'express'

import bodyParser from 'body-parser'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import registerRouter from './routes/register'
import loginRouter from './routes/login'
import userRouter from './routes/user' 













const app=express()
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))

app.use('/login', loginRouter)
app.use('/register', registerRouter)

app.use(verifyToken)
app.use('/user', userRouter)
















function verifyToken(req, res, next) {
    const bearerHeader=req.headers['authorization']

    if(typeof bearerHeader=='undefined')    {
        return res.status(403).json({ message: 'Unauthorized access' })
    }   else    {
        const bearer=bearerHeader.split(' ')
        const bearerToken=bearer[1]

        const privateKey='secretkey'
        jwt.verify(bearerToken, privateKey, (err, authData)=>   {
            if(err) {
                return res.status(403).send({ message: 'Unauthorized access', error: err })
            }   else    {
                next()
            }
        })
    }
}

export default app




























