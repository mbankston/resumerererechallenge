var express = require("express");
var app = express();
var path = require("path");


//if this thing is on heroku, use the predefined port, or use port 5000
app.set('port',(process.env.PORT || 5000));

app.get('/data-request', function(req,res){
    res.json({message : "Hello!"});
});

app.get("/*", function(req,res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function (){
    console.log("Hiiii.  Listening on port:" + app.get('port'));
});