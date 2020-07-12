import express from 'express'
const router=express.Router()

import md5 from 'md5'

import User from '../models/User.js'

router.post('/', async (req, res)=> {
    try {
        const reqUser=req.body
        
		let result=await User.findOne({
			attributes: ['mobile_no'],
			where:	{
				mobile_no: reqUser.mobile_no		
			}	
		})
		if(result)	{
			return res.status(409).json({ message: 'Mobile no. is already registered', })   			 
		}   else    {    
            result=await User.create({
				mobile_no: reqUser.mobile_no,
				password: md5(reqUser.password),
				name: reqUser.name,
				role: reqUser.role
			})
			if(result)  {
				return res.status(201).json({ message: 'Successfully registered', result: result })
			}   else    {
				return res.status(500).json({ message: 'Failed to register', error: result })
			}             
        }		
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to register', error: err })
    } 
})


router.post('/exists', async (req, res)=>	{	
	try	{
		const reqUser=req.body

		let result=await User.findOne({
			attributes: ['mobile_no'],
			where:	{
				mobile_no: reqUser.mobile_no,	
			}	
		})
		if(result)  {
			return res.status(409).json({ message: 'Mobile no. is already registered', result: result })
		}   else    {
			return res.status(200).json({ message: 'Mobile no. is not registered', result: result })
		} 

    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to verify', error: err })
    } 
})

export default router