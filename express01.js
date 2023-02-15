const express=require('express');
const http = require("http");
const app = express(); //서버 3번과 같음
const port=process.env.PORT || 3000;
const html='text/html;charset=utf-8';

//서버03폴더보다 간단하게 쓸수 있다(server03.js)
//라우팅 설정:app.요청메서드(경로,콜백함수)
app.get('/',(req, res)=>{
    res.type(html);
    res.end('<h1>index페이지</h1>');
});

app.get('/user',(req, res)=>{
    res.type(html);
    res.end('<h1>user페이지</h1>');
});

//routing path추가분 -파일이 복잡해짐
app.get('/user/add',(req, res)=>{
    res.type(html);
    res.end('<h1>user가입페이지</h1>');
});

app.get('/user/view',(req, res)=>{
    res.type(html);
    res.end('<h1>user상세정보페이지페이지</h1>');
});
app.get('/about',(req, res)=>{
    res.type(html);
    res.end('<h1>about페이지</h1>');
});
//custom 404 routing
//라우팅 설정2:app.use(경로,콜백함수)
app.use((req, res)=>{
    res.type(html);
    res.status(404);
    res.end('<h1>404-존재하지 않는페이지</h1>');
});
app.listen(port,()=>{








    //---------
    console.log('express 서버가 실행중 중지하려면 ctrl+c를 눌러요');



});