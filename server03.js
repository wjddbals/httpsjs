const http =require('http');
const fs =require('fs'); //파일로
const path = require("path");
const port=process.env.PORT || 3000;

const html='text/html;charset=utf-8';

//요청에 대한 정적파일을 서비스하는 함수 // 2번 server을 다시 해본거임 요렇게
function serveStaticFile(res,fname){
    fs.readFile(path.join(__dirname,'public' , fname),(err,data) => {   //지정된 경로파일에 읽어서 데이타에 넣어라 만약에 오류 생기면
        if(err){ //파일을 읽다가 오류가 발생하면
            //응답코드 500전송후 오류메세지 출력
            res.writeHead(500,{'Content-Type':html});
           return res.end('<h1>파일처리중 오류발생</h1>');

        }
        res.writeHead(200,{'Content-Type':html});
        res.end(data);

    })

}


//localhost:3000요청시 처리, 요청path별 처리 세분화-routing
//요청 path: /
//요청 path: /user
//요청 path: /about
//그외나머지:404페이비 없음

const server =http.createServer((req, res)=>{
    switch (req.url) {
        case '/':

            serveStaticFile(res,'index.html');
            break;
        case '/user':

            serveStaticFile(res,'user.html');
            break;
        case '/about':

            serveStaticFile(res,'about.html');
            break;
        case '/500': //의도적으로 오류를 발생시켜봄

            serveStaticFile(res,'500.html');
            break;
        default:
            serveStaticFile(res,'404.html');

    }

});
server.listen(port,()=>{
    console.log('서버가 작동중 중지하려면 ctrl+c를 눌러요');
});