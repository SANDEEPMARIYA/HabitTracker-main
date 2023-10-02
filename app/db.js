const dotenv = require("dotenv");

dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose =()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://sandswet05:Sand@2002@cluster0.gwxxoel.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then((e)=>console.log("Connected to Mongodb => Habit-Tracker
.Habit-Tracker"))
    .catch((e)=>console.log("Not Connect Mongodb", e));
}
