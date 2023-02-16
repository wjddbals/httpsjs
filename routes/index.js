const exprss=require('express');
const router=exprss.Router();
const path = require("path");

//const html='text/html;charset=utf-8';
//show index page
router.get('/',(req, res)=>{
    res.render('index',{title:'index'});

});

router.get('/sungjuk',(req, res)=>{
    res.render('sungjuk',{title:'성적처리'});

});

router.post('/sungjuk',(req, res,next)=>{
    //폼전송된 데이터들은req.body, req.body.폼이름 등으로로 확인가는
    //console.log(req.body);
   // console.log(req.body.name,req.body.kor,req.body.mat,req.body.eng);
    let {name,kor,eng,mat} =req.body;
    console.log(name,kor,eng,mat);

    //성적처리
    let [tot,avg,grd] =[kor+eng+mat, (kor+eng+mat)/3,'가'];
    console.log(tot,avg,grd);


    //데이터베이스 처리-sungjuk테이블에 insert



    res.redirect(304,'/');

});



//던슌헌 그림파잉을 화면에 표시하기 위해
//라우팅 설정하는 것은 불편함
//*router.get('/smile.png',(req, res)=>{
  //  res.sendFile(path.join(__dirname,'../static/img','smile.png'));
//});

module.exports=router;