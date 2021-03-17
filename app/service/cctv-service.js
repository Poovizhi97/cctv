var cctvModel = require("../model/cctv-model");

var cctvService = {
    getAllattendance_details:getAllattendance_details,
    addattendance_detail:addattendance_detail,
    adddate_time:adddate_time
}

function getAllattendance_details() {
    return new Promise((resolve,reject) => {
        cctvModel.getAllattendance_details().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function addattendance_detail(emp_id,emp_name,device_id,time,date)
 {
    return new Promise((resolve,reject) => {
        cctvModel.addattendance_detail(emp_id,emp_name,device_id,time,date).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
   
}

function adddate_time(id,emp_name,intime,outtime,date)
 {
    return new Promise((resolve,reject) => {
        cctvModel.addattendance_detail(id,emp_name,intime,outtime,date).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
   
}


module.exports = cctvService;