const KFC = () => console.log('KFC');

function MC() {
    console.log('MC');
}

let BK = function () {
    console.log('BK');
}

let arr = [ KFC, MC, MC, BK, BK, KFC ];
arr.forEach(func => func());
