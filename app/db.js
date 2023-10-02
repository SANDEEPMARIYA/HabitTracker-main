const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

exports.connectMongoose = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb+srv://sandswet05:Sand%402002@cluster0.gwxxoel.mongodb.net/csv-upload?retryWrites=true&w=majority', { useNewUrlParser: true })
        .then(() => console.log("Connected to Mongodb => Habit-Tracker"))
        .catch((e) => console.log("Not Connected to Mongodb", e));
}
