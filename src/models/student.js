var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    schno : {
        type:Number,
        unique:true,
        required:true
    },
    f_Name :{
        type:String,
        required:true
    },
    l_Name:{
        type:String,
        required:true
    },
    clss:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        default:'A'
    },
    Roll_no:{
         type:Number,
        required:true
    }
});

module.exports = mongoose.model('Student', studentSchema);