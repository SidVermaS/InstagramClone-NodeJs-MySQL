import express from 'express'
const router=express.Router()


import Post from '../models/Post.js'
import User from '../models/User.js'

router.post('/', async (req, res)=> {
    try {
        const reqPost=req.body

        const result=await Post.create({
            caption: reqPost.caption,
            photo_url: reqPost.photo_url,
            user_id: reqPost.user_id
        })
        if(result)  {      
            return res.status(201).json({ message: 'Successfully posted', result: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to post', })
        }
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to post', error: err })
    } 
})

router.get('/', async (req, res)=>  {
    try {
        const limit=10
        const page=parseInt(req.query.page)
        
        User.hasOne(Post, { foreignKey: 'user_id' })
        Post.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' })

        const result=await Post.findAll({
            offset: page*limit,
            limit: limit,
            attributes: ['post_id', 'caption', 'photo_url'],
            include:   [
                {
                    model: User,
                    attributes: ['user_id','name','photo_url'],
                }
            ]
        })
        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the posts', posts: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the posts', })
        }    
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the posts', error: err })
    } 
})




























export default router