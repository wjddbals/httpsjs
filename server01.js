const http =require('http');
const port=process.env.PORT || 3000;

//localhost:3000요청시 처리
const server =http.createServer((req, res)=>{
    //응답헤더 작성:응답코드
    res.writeHead(200,{'Content-Type':'text/plain'});
    //응답메서지 전송
    res.end('hello,world');
});
server.listen(port,()=>{
    console.log('서버가 작동중 중지하려면 ctrl+c를 눌러요');
});