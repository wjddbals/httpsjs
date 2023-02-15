const http =require('http');
const path = require("path");
const port=process.env.PORT || 3000;
const html='text/html;charset=utf-8';

//localhost:3000요청시 처리, 요청path별 처리 세분화-routing
//요청 path: /
//요청 path: /user
//요청 path: /about
//그외나머지:404페이비 없음

const server =http.createServer((req, res)=>{
    switch (req.url) {
        case '/':
            res.writeHead(200,{'Content_Type':html});
            res.end('<h1>index페이지</h1>');
            break;
        case '/user':
            res.writeHead(200,{'Content_Type':html});
            res.end('<h1>user페이지</h1>');
            break;
        case '/about':
            res.writeHead(200,{'Content_Type':html});
            res.end('<h1>about페이지</h1>');
            break;
        default:
            res.writeHead(404,{'Content_Type':html});
            res.end('<h1>페이지가 존재하지 않아요</h1>');

    }

});
server.listen(port,()=>{
    console.log('서버가 작동중 중지하려면 ctrl+c를 눌러요');
});