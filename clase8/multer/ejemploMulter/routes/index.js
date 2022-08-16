var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, path.join(__dirname ,'../public'))
  },
  filename:(req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
const upload = multer({storage:storage})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Plantillas' });
});
router.post('/uploadfile',upload.single('myFile'),(req,res)=>{
  const file = req.file;
  if(!file){
    res.send(' no hay archivo')
  }
  res.send(file)
})

module.exports = router;
