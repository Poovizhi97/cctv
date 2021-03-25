const { query } = require('../../config/database');
const cctvService=require('../service/cctv-service');



function init(router) {
    router.route('/cctv_attendance_Details')
        .get(getAllattendance_details)
        .post(addattendance_detail);
    // router.route('/date_time')
    //     .post(adddate_time)
}

function getAllattendance_details(req,res) {
    cctvService.getAllattendance_details().then((data) => {
        res.send(data);
      }).catch((err) => {
        
        res.send(err);
      });
  }
  

  async function addattendance_detail(req,res) {
    //var clientid= req.query.client_id;
    // let reqData = req.body;
    // var id=req.query.id;
    // var emp_name=req.query.emp_name
    // var device_id=req.query.device_id;
    // var id=reqData.id;
    // var emp_name=reqData.emp_name
    // var device_id=reqData.device_id;
     var emp_id=req.query.emp_id
      var emp_name=req.query.emp_name
     var device_id=req.query.device_id;
     var time=req.query.time;
     var date=req.query.date;
     console.log(req.query)
    // var intime=req.query.intime;
    // var outtime=req.query.outtime;
    // var date=req.query.date;
    // var intime=reqData.intime;
    // var outtime=reqData.outtime;
    // var time=reqData.time;
    // var date=reqData.date;
     cctvService.addattendance_detail(
       emp_id,emp_name,device_id,time,date
     ).then((data) => {
       res.json(data);
     }).catch((err) => {
      
       res.json(err);
     });
   
   }

    function adddate_time(req,res) {
    //var clientid= req.query.client_id;
    var id=req.query.id;
    var emp_name=req.query.emp_name;
    var intime=req.query.intime;
    var outtime=req.query.outtime;
    var date=req.query.date;
     cctvService.addattendance_detail(
      id,emp_name,intime,outtime,date
     ).then((data) => {
       res.json(data);
     }).catch((err) => {
      
       res.json(err);
     });
   
   }

module.exports.init = init;
