var exp=require("express");
var app=exp();
app.listen(7000,function(){console.log("Server Hosted")});

app.get('/form',function(req,res){
	res.sendFile(__dirname+"/AJAXform.html");
});

app.get('/example',function(req,res){
	res.send("Good Evening, "+req.query.nm);
});





app.all('*',function(req,res){
	res.send("Invalid URL !!!");
});