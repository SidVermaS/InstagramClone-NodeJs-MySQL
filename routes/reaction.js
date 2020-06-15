import express from 'express'
const router=express()

import Reaction from '../models/Reaction.js'
import User from '../models/User.js'

router.patch('/', async (req, res)=>    {
    try {
        const reqReaction=req.body
        const result=await Reaction.findOne({
            where:  {
                post_id: reqReaction.post_id,
                user_id: reqReaction.user_id
            }
        })
        if(result)  {
            if(reqReaction.status==='remove')  {
                const result=await Reaction.destroy({
                    where: {
                        post_id: reqReaction.post_id,
                        user_id: reqReaction.user_id
                    }
                })
                if(result[0]!==0)  {
                    return res.status(201).json({ message: 'Successfully dereacted', reaction: result })         
                }   else    {
                    return res.status(400).json({ message: 'Failed to dereact', })
                }  
            }   else    {
                const result1=await Reaction.update({ status: reqReaction.status }, 
                    { 
                        where:  {
                            post_id: reqReaction.post_id,
                            user_id: reqReaction.user_id
                        } 
                    })
                if(result[0]!==0)  {
                    return res.status(201).json({ message: 'Successfully reacted', reaction: result1 })         
                }   else    {
                    return res.status(400).json({ message: 'Failed to react', })
                }    
            }
        }   else    {
            if(reqReaction.status==='like' || reqReaction.status==='dislike')    {
                const result2=await Reaction.create({
                    status: reqReaction.status,
                    post_id: reqReaction.post_id,
                    user_id: reqReaction.user_id
                })
                return res.status(201).json({ message: 'Successfully reacted', reaction: result2 })
            }   else    {
                return res.status(400).json({ message: 'Failed to react', })
            }
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to react', error: err })
    } 
})

router.get('/', async (req, res)=>   {
    try {
        const reqReaction=req.query
        const limit=10

        const result=await Reaction.findAll({
            offset: parseInt(reqReaction.page)*limit,
            limit: limit,
            where:   reqReaction.status==='all'?
            {
                post_id: reqReaction.post_id
            }:{
                post_id: reqReaction.post_id,
                status: reqReaction.status
            }
        })
        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the reactions', reactions: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the reactions', })
        }  
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the reactions', error: err })
    } 
})

export default router