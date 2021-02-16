const {nameList} = require('./file');

nameList.then(data => {
    let arr = data.toString().split(',');
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i].trim());
    }

}).catch(err => console.log(err));
