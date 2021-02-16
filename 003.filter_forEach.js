const kfc = {
    plate : ['bTS', 'OK', 'HAHAHA', 'TT'],
    series : ['AA'],

    run() {
        let res = this.plate.map(e => e.length);
        console.log(res);
    }
}

const bts = [
    {num : 1, weight : 50, name: "bts"},
    {num : 2, weight : 40, name: "kfc"},
    {num : 3, weight : 60, name: "mc"}
]

kfc.run();
bts.filter(e => e.name !== 'bts').forEach(e => console.log(e));