const express = require('express');

const app = express();

app.get("/", (req, res)=>{
	res.send("Hi Blog");
});

// 啟動伺服器在 http://localhost:3000/

let port = process.env.PORT || 5487;

app.listen(port, function(){
	console.log("Start in "+port);
});