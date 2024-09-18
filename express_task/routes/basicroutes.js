const express=require('express');
const multer = require('multer');
const path = require('path');

const router=express.Router();

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});

const upload = multer({storage:storage});



router.post('/upload',upload.single('image'),(req,res)=>{
    if(!req.file){
        return res.status(400).send('No image uploaded')
    }
    res.send('Image uploaded successfully');
    
})

module.exports=router;