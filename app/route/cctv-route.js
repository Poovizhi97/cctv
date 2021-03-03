const cctvService=require('../service/cctv-service');



function init(router) {
    router.route('/cctv_Details')
        .get(getAllcctv_details)
        .post(addcctv_detail);

}

function getAllcctv_details(req,res) {
    cctvService.getAllcctv_details().then((data) => {
        res.send(data);
      }).catch((err) => {
        
        res.send(err);
      });
  }
  

  function addcctv_detail(req,res) {
    //var clientid= req.query.client_id;
    var cctv_id=req.query.cctv_id;
    var cctv_name=req.query.cctv_name;
    var emp_name=req.query.emp_name;
    var percentage=req.query.percentage;
    var location=req.query.location;
    var time=req.query.time;
   
     cctvService.addcctv_detail(
       cctv_id,cctv_name,emp_name,percentage,location,time
     ).then((data) => {
       res.json(data);
     }).catch((err) => {
      
       res.json(err);
     });
   
   }

module.exports.init = init;
