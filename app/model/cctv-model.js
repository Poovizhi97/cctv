var db = require('../../config/database');
var dbFunc = require('../../config/db-function');
var dateFormat = require("dateformat");
var cctvModel = {
    getAllcctv_details:getAllcctv_details,
    addcctv_detail:addcctv_detail
   
}


function getAllcctv_details() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM CCTV.cctv_Details`,(error,rows,fields)=>{
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

function addcctv_detail(cctv_id,cctv_name,emp_name,percentage,location,time) {
    //var now = new Date();
     // console.log(dateFormat(now,"yyyy-mm-dd"));
     // console.log(dateFormat(now,"hh:MM:ss"));
   // var times = new Date();
  //  console.log(times.toISOString().slice(0,0));
  // var date_time=dateFormat(datetimes,"yyyy-mm-dd")
   //var time=dateFormat(times,"hh:MM:ss")

    return new Promise((resolve,reject) => {
     //  db.query("INSERT INTO `CCTV`.`cctv_Details`(`cctv_id`,`cctv_name`,`emp_name`,`percentage`,`location`,`time`) VALUE('"+cctv_id+"','"+cctv_name+"','"+emp_name+"','"+percentage+"','"+location+"','"+dateFormat(now,"hh:MM:ss")+"')",(error,rows,fields)=>{
        db.query("INSERT INTO `CCTV`.`cctv_Details`(`cctv_id`,`cctv_name`,`emp_name`,`percentage`,`location`,`time`) VALUE('"+cctv_id+"','"+cctv_name+"','"+emp_name+"','"+percentage+"','"+location+"','"+time+"')",(error,rows,fields)=>{

      //  console.log(dateFormat(times,"yyyy-mm-dd"));
      //  console.log(dateFormat(times ,"hh:MM:ss"));
           if(error) {
               dbFunc.connectionRelease;
               reject(error);
           } else {
               dbFunc.connectionRelease;
                //rows.forEach(element => { 
               // element.created_at=dateFormat(element.created_at,"hh-MM-ss")
//console.log(element); 
             //  }); 

               resolve(rows);

           }
          // dateFormat(now,'dd-mm-yyyy')
         });
       });
}

module.exports = cctvModel;