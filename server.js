const express = require("express");
const PORT = process.env.PORT || 8081;

const app = express();




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));


require("routes/api-routes.js")(app);
require("routes/html-routes.js")(app);
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});