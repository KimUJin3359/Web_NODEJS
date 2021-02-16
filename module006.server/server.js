const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./index.html');
        //응답에 대한 정보를 기록하는 메소드
        res.writeHead(200, "text/html: charset=utf-8");
        //응답을 종료하는 메소드
        res.end(data);
    } catch(err) {
        console.log(err);
        res.writeHead(500, "text/html: charset=utf-8");
        res.end(err.message);
    }
});

server.listen(8000, () => {
    console.log("this server listening on 8000");
});