import express from 'express'
const router=express.Router()

import database from '../config/database.js'

import Post from '../models/Post.js'
import Reaction from '../models/Reaction.js'
import User from '../models/User.js'

router.post('/', async (req, res)=> {
    try {
        const reqPost=req.body
		console.log('req: ',reqPost)
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
        
		/*
        User.hasOne(Post, { foreignKey: 'user_id' })
        Post.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' })

		//Reaction.hasOne(Post, P
		
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
		*/
		
		const result=await database.query("select users.user_id, users.name, users.photo_url as 'user_photo_url', posts.post_id, posts.caption, posts.photo_url, posts.createdAt, (select status from reactions where reactions.post_id=posts.post_id and reactions.user_id = :user_id) as 'status', (select count(reaction_id) from reactions where reactions.post_id=posts.post_id) as 'reactions_count', (select count(comment_id) from comments where comments.post_id=posts.post_id) as 'comments_count' from posts inner join users on posts.user_id=users.user_id order by posts.createdAt desc limit :limit offset :offset", { replacements: { user_id: req.query.user_id, limit: limit, offset: page*limit }, type: database.QueryTypes.SELECT })

        if(result)  {
            return res.status(200).json({ message: 'Successfully loaded the posts', posts: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the posts', })
        }    
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the posts', error: err })
    } 
})

router.get('/explore', async (req, res)=>	{
	try	{
		const page=parseInt(req.query.page)
		const limit=18
		const user_id=parseInt(req.query.user_id)	
		
		const result=await Post.findAll({
			offset: page*limit,
			limit: limit,
			attributes: ['post_id', 'photo_url'],
			order: [
				['createdAt', 'desc']
			],
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

router.get('/user', async (req, res)=>	{
	try	{
		const page=parseInt(req.query.page)
		const limit=15
		const user_id=parseInt(req.query.user_id)	
		
		const result=await Post.findAll({
			offset: page*limit,
			limit: limit,
			attributes: ['post_id', 'photo_url'],
			order: [
				['createdAt', 'desc']
			],
			where:	{
		//		user_id: user_id	
			}
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

router.get('/:post_id', async (req, res)=>	{
	try {
		const post_id=parseInt(req.params.post_id)
		const user_id=parseInt(req.query.user_id)
		/*
		User.hasOne(Post, { foreignKey: 'user_id' })
		Post.belongsTo(User, { foreignKey: 'user_id', targetKey: 'user_id' })
	
		const result=await Post.findOne({
			attributes: ['post_id', 'caption','photo_url'],
			include:	[
				{	
					model: User,
					attributes:	['user_id', 'name', 'photo_url']
				}
			],
			where:	{
				post_id: post_id
			}	
		})
		*/
		const result=await database.query("select post_id, caption, posts.photo_url, users.user_id, name, users.photo_url as 'user_photo_url', (select count(reaction_id) from reactions where reactions.post_id=posts.post_id) as 'reactions_count', (select count(comment_id) from comments where comments.post_id=posts.post_id) as 'comments_count', (select status from reactions where reactions.post_id=:post_id and reactions.user_id = :user_id) as 'status' from posts inner join users on posts.user_id=users.user_id and post_id = :post_id", { replacements: { post_id: post_id, user_id: user_id, post_id: post_id }, type: database.QueryTypes.SELECT })
	
	     if(result[0]!==undefined)  {
            return res.status(200).json({ message: 'Successfully loaded the post', post: result[0] })
        }   else    {
            return res.status(500).json({ message: 'Failed to load the post', })
        }    
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to load the post', error: err })
    } 
})	
export default router