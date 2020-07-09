const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/moods"
);

const moodSeed =[
    {   date: Date.now,
        mood: 3
    }
];

db.Mood
    .remove({})
    .then(()=> db.Mood.collection.insertMany(moodSeed))
    .then(data => {
        console.log(data.result.n + " moods added");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });