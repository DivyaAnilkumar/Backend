const express = require('express');
const router = express.Router();

var emp_obj=[{emp_id:23,name:"Diya",location:"TVM"},
    {emp_id:34,name:"meenu",location:"Kollam"}
]

function userroute(nav){//nav is a common element to all routes, function create to pass the common elements .it is used for ejs
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
            title:'Employeeform',
            
            nav
        })
    })
    return router
}


module.exports= userroute;
//table-collection
//row-documents
//column-fields
//schema-model

//Binary json-date,BinData(buffer) format support-monodb
//json not support date and BinData format