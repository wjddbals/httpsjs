const exprss=require('express');
const router=exprss.Router();
const path = require("path");

//const html='text/html;charset=utf-8';
//show index page
router.get('/',(req, res)=>{
   //
    // res.sendFile(path.join(__dirname,'../public','index.html'));
    //handlebars 뷰 엔진으로 응답처리
    res.render('index',{title:'index'});

});


//던슌헌 그림파잉을 화면에 표시하기 위해
//라우팅 설정하는 것은 불편함
//*router.get('/smile.png',(req, res)=>{
  //  res.sendFile(path.join(__dirname,'../static/img','smile.png'));
//});

module.exports=router;