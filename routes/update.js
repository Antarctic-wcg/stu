var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.get('/:id', function(req, res, next) {

  db.user.find({_id: req.params.id}, function(err, doc){
    assert.equal(null, err);
    res.render('update', { title: '学生信息管理', doc: doc })
  })

  // res.render('update', { title: '学生信息管理', doc: req.query });
});


router.post('/', function(req, res, next){
  console.log(req.body.id);
  db.user.update(
    { _id: req.body.id},
    {$set: req.body},function(err){
      console.log(err);
      res.redirect('/show');
    }
  );
});

module.exports = router;
