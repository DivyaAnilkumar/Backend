const express = require('express')
const router = express.Router();
router.use(express.json())//mandatory for post operation to know the data as json
router.use(express.urlencoded({extended:true}));//files or url upload
const movieModel = require('../model/movieData');


//GET Operation
//async await doesnot support negative scenario
//use try catch 
router.get('/',async (req,res)=>{
    try {
        const data = await movieModel.find();
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).send('Data not found');
    
    }
    

})

//post operation
router.post('/addMovies',async(req,res)=>{
    try {
        var item = req.body;
        const data1 = new movieModel(item);//create an instance of movieModel and embedded with item
        const saveddata = await data1.save();//data saved
        res.status(200).send('Post successful');
    } catch (error) {
        res.status(404).send('Post unsuccessful');
        
    }
})

//Update operation
//the id of the document to be passed
router.put('/edit/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await movieModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('Update successful');
    } catch (error) {
        res.status(404).send('Update unsuccessful');
        
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await movieModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful');
    } catch (error) {
        res.status(404).send('Delete unsuccessful')
    }
})


module.exports = router