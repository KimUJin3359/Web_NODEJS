const express = require('express');
const app = express();

app.get('/', (req, res) => {
    try {
        return res.sendFile(__dirname + '/index.html');
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.get('/login', (req, res) => {
    try {
        return res.sendFile(__dirname + '/login.html');
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.get('/signup', (req, res) => {
    try {
        return res.sendFile(__dirname + '/signup.html');
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.listen(8000, () => {
    console.log("port : 8000");
})