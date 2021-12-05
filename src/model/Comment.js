const mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
	    eventID: {
	        type: String,
	        required: true
	    },
	    content: {
	        type: String,
	        required: true
	    }
})


module.exports = mongoose.model("comment",commentSchema)