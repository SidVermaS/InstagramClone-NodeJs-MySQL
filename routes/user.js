import express from 'express'
const router=express.Router()

import md5 from 'md5'
import User from '../models/User.js'

router.get('/', async (req, res)=>  {    
    try {
        const page=parseInt(req.query.page)
        const limit=10
        const result=await User.findAll({
            offset: page*limit,
            limit: limit,
        })
        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the users', users: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the users', })
        }
        
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the users', error: err })
    } 
})

router.get('/:user_id', async (req, res)=>  {
    
    try {
        const user_id=parseInt(req.params.user_id)

        const result=await User.findOne({
            attributes: ['user_id','mobile_no','name','role','photo_url'],
            where:  {
                user_id: user_id
            }
        })
        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the user', user: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the user', })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the user', error: err })
    } 
})

router.put('/', async (req, res)=>    {
    return res.status(500).json({ message: 'Anything', })
    try {
        // const reqUser=req.body
        console.log('updateUreqUserser: ')
        // const updateUser=reqUser.name!==undefined && reqUser.role!==undefined?{ name: reqUser.name, role: reqUser.role }:reqUser.name==undefined?{ role: reqUser.role }:{ name: reqUser.name }

        // const updateUser={ role: reqUser.role }
        // console.log('updateUser: ',updateUser)
    //     const result=await User.update({ role: reqUser.role }, { where: { user_id: reqUser.user_id } }) 


    //     if(result)  {
    //         return res.status(200).json({ message: 'Successfully edited the user', user: result })
    //     }   else    {
    //         return res.status(500).json({ message: 'Failed to edit the user', })
    //     }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to edit the user', })
    } 
})










export default router