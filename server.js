const express = require("express");

const mongoose = require("mongoose");

const app = express();

const routes = require("./routes")

const PORT = process.env.PORT || 3002

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/moods");

app.listen(PORT, function(){
    console.log (`You are listening on ${PORT} congratulations`);
});