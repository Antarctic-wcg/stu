var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/', function(req, res, next){



  res.render('del' ,{ title: '学生信息管理'});

    db.user.deleteMany(
      { _id: req.query.id},
      function(err){

      }
    );

    console.log("---------------------",req.query.id);
});



module.exports = router;
