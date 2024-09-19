const express=require('express');
const router=express.Router();
router.use(express.json());//built in middleware
router.use(express.urlencoded({extended:true}))
//sample dataset
var arr_obj=[{name:'Miya',age:20,location:'TVM'},
    {name:'Jeena',age:22,location:'Kochi'}];

router.get('/students',(req,res)=>{
    //res.send(arr_obj);
    res.render("students",{
        title:'Student',
        arr_obj
    })
})
//Add operation
router.post('/add',(req,res)=>{
    const data=req.body;//data access
    console.log(data);
    arr_obj.push(data);
    res.send('Post successful')
})
//PUT or edit operation
router.put('/edit',(req,res)=>{
    //const id=req.params.id;//id access
    const data=req.body;
    arr_obj.splice(1,1,data);
    res.send(arr_obj);

})

//Delete operation
router.delete('/remove',(req,res)=>{
    arr_obj.pop();
    res.send(arr_obj);
})
module.exports=router;