import express from 'express'
router=express.Router()

import md5 from 'md5'

import User from '../models/User'

router.post('/', async (req, res)=> {
    try {
        const reqUser=req.body
        
        const result=await User.create({
            mobile_no: reqUser.mobile_no,
            password: md5(reqUser.password),
            name: reqUser.name,
            role: reqUser.role
        })
        return res.status(201).json({ message: 'Successfully registered', result: result })
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to register', error: err })
    } 
})

export default router