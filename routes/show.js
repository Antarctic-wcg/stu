var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');


router.get('/', function(req, res, next) {
  db.user.find({}, function(err, doc){
    assert.equal(null, err);
    res.render('show', { title: '学生信息管理', news: doc })
  })

});

module.exports = router;
