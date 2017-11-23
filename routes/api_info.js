var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');


router.get('/', function(req, res, next) {
  db.user.find({}, function(err, doc){
    assert.equal(null, err);
    res.json(doc);
    // res.render('show', { title: '学生信息管理' });
  }).sort({_id:-1})

});

module.exports = router;
