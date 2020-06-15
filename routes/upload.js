import express from 'express'
const router=express.Router()

router.post('/', async (req, res)=> {
    try {
        const file_type=req.query.file_type

        const file=req.files.photo

        const { result }=file.mv('/uploads/'+file_type+file.name)

        if(result)  {
            return res.status(200).json({ message: 'Successfully uploaded the photo', photo: result })
        }   else    {
            return res.status(500).json({ message: 'Failed to upload the photo', })
        }
        
    }   catch(err)  { 
        return res.status(500).json({ message: 'Failed to upload the photo', error: err })
    } 
})

export default router