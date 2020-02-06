let Burger = require("../models/burger.js");

module.exports = function(app) {

    app.get("/api/:burgers", function(req, res){

        Burger.findAll({}).then(function(results){
            res.json(results);
        })

    })




}