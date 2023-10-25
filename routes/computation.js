var express = require('express');
var router = express.Router();
var m;
var k;
var imul;
var log;
var log10;


/* GET home page. */
router.get('/', function(req, res, next) {
    router.put( k = Math.random() * 10);
    router.put( m = Math.round(k));
    router.post(imul = Math.imul(m));
    router.post(log = Math.log(m));
    router.post(log10 = Math.log10(m));
    
    res.send(`log applied to ${m} is ${log} log10 applied to ${m} is ${log10}`);
  
});

module.exports = router;
