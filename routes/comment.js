import express from 'express'
const router=express.Router()

import Comment from '../models/Comment.js'
import User from '../models/User.js'


router.post('/', async (req, res)=> {
    try {
        const reqComment=req.body
        const result=await Comment.create({
            comment_text: reqComment.comment_text,
            post_id: reqComment.post_id,
            user_id: reqComment.user_id
        })

        if(result)  {      
            return res.status(201).json({ message: 'Successfully commented', result: result })
        }   else    {
            return res.status(400).json({ message: 'Failed to comment', })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to comment', error: err })
    } 
})


router.get('/:post_id', async (req, res)=>  {
    try {
        const limit=10
        const page=parseInt(req.query.page)

        User.hasOne(Comment, { foreignKey: 'user_id' })
        Comment.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' })

        const result=await Comment.findAll({
            offset: page*limit,
            limit: limit,
            attributes: ['comment_id', 'comment_text'],
            include:    [
                {
                    model: User,
                    attributes: ['user_id', 'name', ]
                }
            ],
            where:  {
                post_id: parseInt(req.params.post_id)
            }         
        })
        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the comments', comments: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the comments', })
        }  
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the comments', error: err })
    } 
})

router.delete('/', async (req, res)=>   {
    try {


















}   catch(err)  { 
    return res.status(500).json({ message: 'Failed to load the comments', error: err })
} 
})

export default router