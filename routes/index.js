var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'facebook' });
});

router.post('/', function(req, res, next) {
  let Username=req.body.uname
  let Password=req.body.pwd
});


module.exports = router;
