const mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteEvent: {
        type: [Number]
    } //,
    //     //icon: {
    //     //data: Buffer,
    //     //contentType: String
    //     //}
});


module.exports = mongoose.model("user", UserSchema);