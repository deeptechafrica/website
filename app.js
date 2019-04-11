let express = require("express"),
    app     = express(),
    ejs     = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

//landing page route
app.get("/", function(req, res){
    res.render("index");
});

// team page
app.get("/team", function(req, res){
    res.render("teams")
});

// about us page
app.get("/our-culture",function(req, res){
    res.render("about");
});

// Server Starter
app.listen(1000, function(){
    console.log("App Is Running on localhost:1000");
});