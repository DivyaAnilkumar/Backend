const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const employeeModel = require('../model/employeeData');



// function employeeroutes(nav){
//     router.get('/',async(req,res)=>{
//         try {
//             res.render("employee",{
//                 title:'Employee',
//                 nav
//             })
//         } catch (error) {
//             res.render(error);
//             // res.status(404).send('Data not found');
//         }
//     });
//     return router;
// }

function employeeroutes(nav){
router.get('/',async(req,res)=>{
    try {
        const data = await employeeModel.find();
        res.status(201).render("employee",{
            title:'Employee',
            nav,
            data
            
        })
        
    } catch (error) {
        res.render(error);
        res.status(404).send('Data not found');
    }
});


router.get('/employeeAdd',async(req,res)=>{
    try {
        // const data = await employeeModel.find();
        res.status(201).render("employeeAdd",{
            title:'EmployeeAdd',
            nav,
            
            
        })
        
    } catch (error) {
        res.render(error);
        res.status(404).send('Data not found');
    }
});



router.post('/addEmployee',async(req,res)=>{
    try {
        var item = req.body;
        const data1 = new employeeModel(item);
        const saveddata = await data1.save();
        res.status(200).send('Post Successful');

    } catch (error) {
      res.status(404).send('Post Unsuccessful');  
    }
})

router.put('/editEmployee/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await employeeModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('Update successful');
    } catch (error) {
       res.status(404).send(error); 
    }
})

router.delete('/deleteEmployee/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await employeeModel.findByIdAndDelete(id);
        res.status(200).send('Delete successful')
    } catch (error) {
        res.status(404).send('Delete Unsuccessful');
    }
})



return router;
}






module.exports=employeeroutes
// module.exports = router;