import express from 'express'
const router=express.Router()

import database from '../config/database.js'

import md5 from 'md5'
import User from '../models/User.js'

router.get('/', async (req, res)=>  {    
    try {
        const page=parseInt(req.query.page)
        const limit=10
        const result=await User.findAll({
            offset: page*limit,
            limit: limit,
			attributes:	['user_id','name','role','photo_url'],
			order: [
				['name', 'asc']
			]	
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
		/*
        const result=await User.findOne({
            attributes: ['user_id','mobile_no','name','role','photo_url'],
            where:  {
                user_id: user_id
            }
        })
		*/
		const result=await database.query("select users.user_id, name, role, photo_url, mobile_no, (select count(post_id) from posts where user_id=:user_id) as 'posts_count', (select count(reaction_id) from reactions where reactions.user_id=:user_id and status='like') as 'reactions_count' from users where user_id = :user_id", { replacements:	{
		user_id: user_id, user_id: user_id, user_id: user_id }, type: database.QueryTypes.SELECT })
        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the user', user: result[0] })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the user', })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the user', error: err })
    } 
})

router.patch('/edit', async (req, res)=>    {
    try {
        const reqUser=req.body
        const updateUser=reqUser.name!==undefined && reqUser.role!==undefined?{ name: reqUser.name, role: reqUser.role }:reqUser.name==undefined?{ role: reqUser.role }:{ name: reqUser.name }

        const result=await User.update(updateUser, { where: { user_id: reqUser.user_id } }) 

        if(result[0]!==0)  {
            return res.status(200).json({ message: 'Successfully edited the user', user: result })
        }   else    {
            return res.status(400).json({ message: 'Failed to edit the user', })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to edit the user', })
    } 
})

router.patch('/edit/password', async (req, res)=>    {
    try {
        const reqUser=req.body

        const result=await User.update({ password: md5(reqUser.new_password) }, { where: { user_id: reqUser.user_id, password: md5(reqUser.old_password) } }) 

        if(result[0]!==0)  {
            return res.status(200).json({ message: 'Successfully changed the password', user: result })
        }   else    {
            return res.status(400).json({ message: 'Failed to change the password', })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to change the password', })
    } 
})








export default router