import express from 'express'
const router=express.Router()

import path from 'path'
import { v1 as uuidv1 } from 'uuid'

router.post('/', async (req, res)=> {
    try {
        const file_type=req.query.file_type
		
        const file=req.files.file
		console.log('file: ',file)
		const subPath=`${uuidv1()}.${file.mimetype.split('/')[1]}`
		const jointPath=(path.join(__dirname,`../uploads/${file_type}/${subPath}`))
		
        const result=await file.mv(jointPath)
		
        return res.status(201).json({ message: 'Successfully uploaded the photo', photo_url: subPath })
        
        
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to upload the photo', error: err })
    } 
})

export default router