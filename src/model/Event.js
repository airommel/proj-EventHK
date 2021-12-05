const mongoose = require("mongoose");

var eventSchema = mongoose.Schema({
    eventID: {
        type: Number,
        required: true,
        unique: true
    },
    eventSummary: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    },
    eventOrganizer: {
        type: String,
        required: true
    },
    eventLocation: {
        type: String,
        required: true
    },
    eventICS: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("event",eventSchema);