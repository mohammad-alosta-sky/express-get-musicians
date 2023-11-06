const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get("/musicians", async (req, res) => {
    const allMusicians = await Musician.findAll();
    res.json(allMusicians);
})


app.get("/musicians/:idTag", async (req, res) => {
    const allMusicians = await Musician.findByPk(req.params.idTag);
    res.json(allMusicians);
})


app.get("/bands", async (req, res) => {
    const allBands = await Band.findAll();
    res.json(allBands);

})






module.exports = app;