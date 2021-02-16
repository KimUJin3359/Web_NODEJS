const express = require('express');
const app = express();

app.get("/", (req, res) => {
    try{
        return res.sendFile(__dirname+"/index.html");
    } catch(err){
        return res.send("404 Not Found");
    }
});

app.listen(8000, () => {
    console.log("port : 8000");
})