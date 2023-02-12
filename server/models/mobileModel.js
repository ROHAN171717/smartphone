// import mongoose from "mongoose";
// import autoIncrement from 'mongoose-auto-increment';

const mongoose=require('mongoose');
// const autoIncrement=require('mongoose-auto-increment')

const mobileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter mobile name"]
    },
    img:{
        type:String,
        required:[true,"Please enter mobile img"]
    },
    company:{
        type:String,
        required:[true,"Please enter mobile company name"]
    },
    screenSize:{
        type:String,
        required:[true,"Please enter mobile screen size"]
    },
    storage:{
        type:String,
        required:[true,"Please enter mobile storage"]
    },
    os:{
        type:String,
        required:[true,"Please enter mobile operating system"]
    },
    battery:{
        type:String,
        required:[true,"Please enter mobile battery capacity"]
    },
    ram:{
        type:String,
        required:[true,"Please enter mobile ram"]
    },
    price:{
        type:String,
        required:[true,"Please enter mobile price"]
    }
})


// autoIncrement.initialize(mongoose.connection);
// mobileSchema.plugin(autoIncrement.plugin, 'smartphone');

const Smartphone=mongoose.model('smartphone',mobileSchema)

module.exports=Smartphone;