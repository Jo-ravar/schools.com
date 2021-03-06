var express = require('express'); 
var router = express.Router(); 
var student = require('../models/student');

router.post('/add',function(req,res){
    
    var newStudent=new student({
     schno:req.body.schno,
     f_Name:req.body.fname,
     l_Name:req.body.lname,
     clss:req.body.clss,
     section:req.body.sec,
     Roll_no:req.body.roll
    });
    newStudent.save({},function(err,done){
        if (err) {
          console.log("Error in new student "+JSON.stringify(err));
        return res.json({ success: false, message: 'schno already number exist'});
      }
      res.json({ success: true, message: 'Successfully created new student.' });
    }); 
});

router.get('/all',function(req,res){
    student.find({},function(err,data){
        if (err) {
          console.log("Cannot get List of all studdents "+JSON.stringify(err));
        return res.json({ success: false, message: 'Server Error'});
      }
      res.send(data);
    }); 
});

router.get('/getstudent',function(req,res){
var scno=req.query.scno;
student.find({ schno:scno},function(err,data){
        if (err) {
          console.log("Cannot get List of all studdents "+JSON.stringify(err));
        return res.json({ success: false, message: 'Server Error'});
      }
      res.send(data);
    }); 
});

router.get('/delete',function(req,res){

var scno=req.query.scno;
console.log(" id "+scno);
var query= {schno:scno};
student.remove(query,function(err,result){
    if (err) {
         console.log("Error in deleting " + JSON.stringify(err));
         return res.json({ success: false, message: 'Deletion failed'});
    }else{
        console.log("Deletion Successful " + JSON.stringify(result));
        res.json({ success: true, message: 'Successfully Deleted.' });
      }
    });
});

router.post('/edit',function(req,res){
    var newStudent={
     schno:req.body.schno,
     f_Name:req.body.fname,
     l_Name:req.body.lname,
     clss:req.body.clss,
     section:req.body.sec,
     Roll_no:req.body.roll
    };

    var scno=req.query.scno;
    console.log(" id "+scno);
    var query= {schno:scno};

    student.update(query, {$set:newStudent},{new:false},function(err,result) {
      if (err) {
         console.log("Error in Editing " + JSON.stringify(err));
        return res.json({ success: false, message: 'Something went wrong.'});
      }
      else
      {  
          console.log("Edit Successful " + JSON.stringify(result));
          res.json({ success: true, message: 'Successfully Edited.' });
      }
    });
});


module.exports = router;
