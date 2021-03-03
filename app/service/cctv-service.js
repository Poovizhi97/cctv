var cctvModel = require("../model/cctv-model");

var cctvService = {
    getAllcctv_details:getAllcctv_details,
    addcctv_detail:addcctv_detail
}

function getAllcctv_details() {
    return new Promise((resolve,reject) => {
        cctvModel.getAllcctv_details().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function addcctv_detail(cctv_id,cctv_name,emp_name,percentage,location,time)
 {
    return new Promise((resolve,reject) => {
        cctvModel.addcctv_detail(cctv_id,cctv_name,emp_name,percentage,location,time).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
   
}


module.exports = cctvService;