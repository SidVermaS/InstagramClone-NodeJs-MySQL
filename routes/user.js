import express from 'express'
const router=express.Router()

import md5 from 'md5'
import User from '../models/User.js'

router.get('/', async (req, res)=>  {    
    try {
        const page=parseInt(req.page)
        const limit=10
        const result=await User.findAll({
            offset: page*limit,
            limit: limit,
        })
        return res.status(200).json({ message: 'Successfully loaded the users', users: result })
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the users', error: err })
    } 
})

router.get('/:user_id', async (req, res)=>  {
    try {
        const user_id=parseInt(req.query.user_id)
        const result=await User.findOne({
            attributes: ['user_id','mobile_no','name','role','photo_url'],
            where:  {
                user_id: user_id
            }
        })
        return res.status(200).json({ message: 'Successfully loaded the user', user: result })
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the user', error: err })
    } 
})











export default router