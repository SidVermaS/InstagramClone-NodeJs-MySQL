import express from 'express'
const router=express.Router()

import jwt from 'jsonwebtoken'
import md5 from 'md5'

import User from '../models/User'

router.post('/', async (req, res)=> {
    try {
        const reqUser=req.body

        const result=await User.findOne({
            attributes: ['user_id'],
            where:  {
                mobile_no: reqUser.mobile_no
            }
        })
        if(result.length>0) {
            const result1=await User.findOne({
                attributes: ['user_id','mobile_no','name','role','photo_url'],
                where:  {
                    mobile_no: reqUser.mobile_no,
                    password: md5(reqUser.password)
                }
            })
            if(result1.length>0)    {
                const privateKey='secretkey'
                const token=jwt.sign({ user: result1[0] }, privateKey)
                const user=result1[0]
                user['token']=token

                return res.status(200).json({ message: 'Successfully logged in', user })
            }   else    {    
                return res.status(400).json({ message: 'Invalid credentials' })
            }            
        }   else    {    
            return res.status(400).json({ message: 'Mobile no. is not registered' })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to login', error: err })
    } 
})

export default router