var employeeModel = require("../model/employee.model");


var employeeService = {

    getAllemployee:getAllemployee,
    addemployee:addemployee,
    updateemployee:updateemployee,
    deleteemployee:deleteemployee,
    getemployeeById:getemployeeById
}

function getAllemployee() {
    return new Promise((resolve,reject) => {
        employeeModel.getAllemployee().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


function addemployee(emp_id,emp_name,designation,mobile_no,mail_id,face_temp,emp_img) {
    return new Promise((resolve,reject) => {
        employeeModel.addemployee(emp_id,emp_name,designation,mobile_no,mail_id,face_temp,emp_img).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
   
}


function updateemployee(empid,employeeData,callback) {
    return new Promise((resolve,reject) => {
        employeeModel.updateemployee(empid,employeeData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
     
}

function deleteemployee(emp_id) {
    return new Promise((resolve,reject) => {
        employeeModel.deleteemployee(emp_id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}


function getemployeeById(emp_id) {
    return new Promise((resolve,reject) => {
        employeeModel.getemployeeById(emp_id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = employeeService;
