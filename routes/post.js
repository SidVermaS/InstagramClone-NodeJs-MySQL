import express from 'express'
const router=express.Router()

import Post from '../models/Post'

router.post('/', async (req, res)=> {
    try {
        const reqPost=req.body

        const result=await Post.Create({
            caption: reqPost.caption,
            photo_url: reqPost.photo_url,
            user_id: reqPost.user_id
        })
        return res.status(201).json({ message: 'Successfully posted', result: result })
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to post', error: err })
    } 
})

router.get('/', async (req, res)=>  {
    try {
        const reqPost=req.query
        












    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the posts', error: err })
    } 
})


export default router