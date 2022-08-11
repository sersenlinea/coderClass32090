const { signedCookie } = require('cookie-parser');
const express = require('express')
var router = express.Router();
router.get('/',(req,res)=>{
    res.send('inicio')
})
module.exports = router