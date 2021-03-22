var db = require('../../config/database');
var dbFunc = require('../../config/db-function');
var dateFormat = require("dateformat");
var cctvModel = {
    getAllattendance_details:getAllattendance_details,
    addattendance_detail:addattendance_detail,
    adddate_time:adddate_time
}


function getAllattendance_details() {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM cctv_attendance.attendance`,(error,rows,fields)=>{
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

function addattendance_detail(emp_id,emp_name,device_id,time,date) {
    

    return new Promise((resolve,reject) => {
     //  db.query("INSERT INTO `CCTV`.`cctv_Details`(`cctv_id`,`cctv_name`,`emp_name`,`percentage`,`location`,`time`) VALUE('"+cctv_id+"','"+cctv_name+"','"+emp_name+"','"+percentage+"','"+location+"','"+dateFormat(now,"hh:MM:ss")+"')",(error,rows,fields)=>{
        db.query(`SELECT * FROM attendance WHERE emp_name = "${emp_name}" and date="${date}" ORDER BY serial_no DESC LIMIT 1`,(error,rows,fields)=>{
      //  console.log(dateFormat(times,"yyyy-mm-dd"));
      //  console.log(dateFormat(times ,"hh:MM:ss"));
      console.log("========> New api call")
           if(error) {
               dbFunc.connectionRelease;
               reject(error);
           } else {
            dbFunc.connectionRelease;
               if(rows.length > 0) {
                // check for outtime
                console.log("========> db already has the record with this name so check for intime or outtime is present")
                // console.log(rows[0])
                if(rows[0] && rows[0].outtime) {
                    console.log("========> Old record has both intime, outtime so creating new record with intime alone")
                    // insert new row
                    db.query(`INSERT INTO attendance(emp_name, intime, date, device_id) VALUES ("${emp_name}", "${time}","${date}", ${device_id})`,(error,insertedData,fields)=>{
                        if(error) {
                            dbFunc.connectionRelease;
                            reject(error);
                        } else {
                            dbFunc.connectionRelease;
                            let data = {
                                emp_name: emp_name,
                                intime: time,
                                date: date,
                                // id: insertedData.insertId
                            }
                            resolve(data);
                        }
                    });
                } else {
                    console.log("========> old record has only intime so updating outtime")
                    // update outtime
                    db.query(`UPDATE attendance SET outtime="${time}", date="${date}", device_id="${device_id}" WHERE serial_no="${rows[0].serial_no}"`,(error,updatedData,fields)=>{
                        if(error) {
                            dbFunc.connectionRelease;
                            reject(error);
                        } else {
                            dbFunc.connectionRelease;
                            rows[0].outtime = time;
                            resolve(rows[0]);
                        }
                    });
                }
               } else {
                    // insert new record
                    console.log("========> No previous records with this name, so  create new row on db with only intime")
                    db.query(`INSERT INTO attendance(emp_name, intime, date, device_id) VALUES ("${emp_name}", "${time}","${date}", ${device_id})`,(error,insertedData,fields)=>{
                        if(error) {
                            dbFunc.connectionRelease;
                            reject(error);
                        } else {
                            dbFunc.connectionRelease;
                            let data = {
                                emp_name: emp_name,
                                intime: time,
                                date: date,
                                // id: insertedData.insertId
                            }
                            resolve(data);
                        }
                    });
               }
                //rows.forEach(element => { 
               // element.created_at=dateFormat(element.created_at,"hh-MM-ss")
//console.log(element); 
             //  }); 

               

           }
          // dateFormat(now,'dd-mm-yyyy')
         });
       });
}


function adddate_time(emp_name,date) {
    return new Promise((resolve,reject) => {
        db.query(`SELECT * FROM cctv_attendance.attendance where emp_name=`+emp_name+`and date=`+date+``,(error,rows,fields)=>{
            if(!!error) {
                dbFunc.connectionRelease;
                reject(error);
            } else {
                dbFunc.connectionRelease;
                resolve(rows);
                console.log(rows)
            }
       });
    });
}

module.exports = cctvModel;
