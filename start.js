const express = require("express");

var app = express();
app.listen(5000,()=>{
    console.log("Server listening on 5050...");
});
app.use(express.static("dist"));