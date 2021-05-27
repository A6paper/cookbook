const { response } = require("express");
const express = require("express");
const { connect } = require("mongodb");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");


db.connect();

app.get("/", (request,response) => {
    response.send("Jsi na hlavni srance");
});

app.listen(PORT, (err) => {
    console.log(`Server bezi na ${PORT}!`)
});