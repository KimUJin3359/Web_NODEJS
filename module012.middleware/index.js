const express = require('express');
const app = express();
let a, b;

app.use((req, res, next) => {
    a = 30;
    next();
});

const myMiddleware = (req, res, next) => {
    b = 15;
    next();
};

app.get('/', (req, res) => {
    try {
        return console.log(a);
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.get('/add', (req, res) => {
    try {
        return console.log(a + a);
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.get('/sub', (req, res) => {
    try {
        return console.log(a - 1);
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.get('/multi', (req, res) => {
    try {
        return console.log(a * a);
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.get('/other', myMiddleware, (req, res) => {
    try {
        return console.log(a + b);
    } catch (error) {
        return res.send("404 Not Found");
    }
});

app.listen(8000, console.log("port : 8000"));