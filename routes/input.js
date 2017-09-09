var express = require('express');
var router = express.Router();
var db = require('../db');
var assert = require('assert');
var socket = require('../socket');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('input', { title: '学生信息管理' });
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var user = new db.user(req.body);
  user.save(function(err, resulte){
    assert.equal(err, null);
    socket.io.emit("sbb",resulte);
    res.redirect('/show');
  });



});

module.exports = router;
