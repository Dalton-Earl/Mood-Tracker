const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moodSchema = new Schema({
    date: {type: Date, default: Date.now},
    mood: {type:Number, required: true}
})

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;