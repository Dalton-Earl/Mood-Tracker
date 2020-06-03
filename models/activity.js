const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    date: {type: Date, default: Date.now},
    name: {type: String, required: true},
    done: {type: Boolean},
    scale: {type: Number}
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
