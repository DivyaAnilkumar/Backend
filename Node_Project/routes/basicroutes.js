const express = require('express');
const router = express.Router();

var emp_obj=[{emp_id:23,name:"Diya",location:"TVM"},
    {emp_id:34,name:"meenu",location:"Kollam"}
]

function userroute(nav){
    router.get('/employee',(req,res)=>{
        //res.send(emp_obj);
        res.render("employee",{
            title:'Employeelist',
            emp_obj,
            nav
        })
    })

    router.get('/employeeform',(req,res)=>{
        //res.send(emp_obj);
        res.render("employeeform",{
            title:'Employeelist',
            
            nav
        })
    })
    return router
}


module.exports= userroute;