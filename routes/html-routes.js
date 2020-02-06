let path = require("path");
require("express-handlebars");

module.exports = function(app){

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"))
});

};