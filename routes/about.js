const exprss=require('express');
const path = require("path");
const router=exprss.Router();



//show index page
router.get('/',(req, res)=>{
  //  res.sendFile(path.join(__dirname,'../public','about.html'));
    res.render('user',{title:'user'});
});

module.exports=router;