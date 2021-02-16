const fs = require('fs');

file = fs.readFile('./content.txt', (err, data) => {
    if (err) {
        throw err;
    }
    else {
        console.log(data);
        console.log(data.toString());
    }
});

const fs1 = require('fs').promises;

fs1.readFile('./content.txt').then((data) => {
    console.log(data);
    console.log(data.toString());
}).catch((err) => console.log(err));