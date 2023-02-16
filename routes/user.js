const exprss=require('express');
const path = require("path");
const router=exprss.Router();



//show index page
router.get('/',(req, res)=>{
  //  res.sendFile(path.join(__dirname,'../public','user.html'));
    res.render('about',{title:'about'});
});

router.get('/add',(req, res)=>{
    res.type(html);
    res.end('<h1>user가입페이지</h1>');
});

router.get('/view',(req, res)=>{
    res.type(html);
    res.end('<h1>user상세정보페이지페이지</h1>');
});
module.exports=router;