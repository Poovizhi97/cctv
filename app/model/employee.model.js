var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var employeeModel = {
  
    getAllemployee:getAllemployee,
    addemployee:addemployee,
    updateemployee:updateemployee,
    deleteemployee:deleteemployee,
    getemployeeById:getemployeeById
}

function getAllemployee() {
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM cctv_attendance.employee_table",(error,rows,fields)=>{
            console.log(rows);
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });
}



function getemployeeById(emp_id) {
    console.log(emp_id)
    return new Promise((resolve,reject) => {
        db.query("SELECT * FROM cctv_attendance.employee_table WHERE emp_id="+emp_id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });
    });  
}

function addemployee(emp_id,emp_name,designation,mobile_no,mail_id,face_temp,emp_img) {
     return new Promise((resolve,reject) => {

         db.query("INSERT INTO cctv_attendance.employee_table (emp_id,emp_name,designation,mobile_no,mail_id,face_temp,emp_img) VALUES ('"+emp_id+"','"+emp_name+"','"+designation+"','"+mobile_no+"','"+mail_id+"','"+face_temp+"','"+emp_img+"')",(error,rows,fields)=>{
            if(error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);

            }
          });
        });
}


function updateemployee(emp_id,employee_Details) {
    return new Promise((resolve,reject) => {
        db.query("UPDATE cctv_attendance.employee_table set emp_id='"+employee_Details.emp_id+"',emp_name='"+employee_Details.emp_name+"',designation='"+employee_Details.designation+"',mobile_no='"+employee_Details.mobile_no+"',mail_id='"+employee_Details.mail_id+"',face_temp='"+employee_Details.face_temp+"',emp_img='"+employee_Details.emp_img+"' WHERE emp_id='"+emp_id+"'",(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });    
    })
}

function deleteemployee(emp_id) {
   return new Promise((resolve,reject) => {
        db.query("DELETE FROM cctv_attendance.employee_table WHERE emp_id="+emp_id,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
            }
       });    
    });
}


module.exports = employeeModel;