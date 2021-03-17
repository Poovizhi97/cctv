const employeeService = require('../service/employee.service');
//var schema = require('../../schema/employee_schema.json');
//var iValidator = require('../../common/iValidator');
//var errorCode = require('../../common/error-code');
//var errorMessage = require('../../common/error-methods');
//const { getAllclient, addclient, deleteclient, getclientById } = require('../models/client-model');
//var mail = require('./../../common/mailer.js');


function init(router) {
    router.route('/employee_Details')
        .get(getAllemployee)
        .post(addemployee)
      
    router.route('/employee_Details/:emp_id')
        .get(getemployeeById)
        .put(updateemployee)
        .delete(deleteemployee); 
    
}

function getAllemployee(req,res) {
    employeeService.getAllemployee().then((data) => {
      res.send(data);
    }).catch((err) => {
      
      res.send(err);
    });
}

function getemployeeById(req,res) {

  let empid = req.params.emp_id

  // var json_format = iValidator.json_schema(schema.getSchema,empId,"employee_Details");
  // if (json_format.valid == false) {
  //   return res.status(422).send(json_format.errorMessage);
  // }

  employeeService.getemployeeById(empid).then((data) => {
      res.send(data);
    }).catch((err) => {

      res.send(err);
    });
}

/*function getdashboardattendance(req,res) {
  var attendanceData=req.body;
  var id = req.params.id;
  attendanceService.getdashboardattendance(id).then((data)=>{
     res.json(data);
 }).catch((err)=>{
     mail.mail(err);
     res.json(err);
  });client_id,name,phone_no,email,cot_details
}*/
 
function addemployee(req,res) {
 var empid= req.query.emp_id;
 var emp_name=req.query.emp_name;
 var designation=req.query.designation;
 var mobile_no=req.query.mobile_no;
 var mail_id=req.query.mail_id;
 var face_temp=req.query.face_temp;
 var emp_img=req.query.emp_img

 employeeService.addemployee(
    empid,emp_name,designation,mobile_no,mail_id,face_temp,emp_img
  ).then((data) => {
    res.json(data);
  }).catch((err) => {
    // mail.mail(err);
    res.json(err);
  });

}




function updateemployee(req,res) {
   var employeeData=req.body;
   var empid = req.params.emp_id;
   employeeService.updateemployee(empid,employeeData).then((data)=>{
      res.json(data);
  }).catch((err)=>{
      
      res.json(err);
   });
}


function deleteemployee(req,res) {
  var delId = req.params.emp_id;
  employeeService.deleteemployee(delId).then((data)=>{
    res.json(data);
  }).catch((err)=>{
     mail.mail(err);
      res.json(err);
  });
}


module.exports.init = init;



