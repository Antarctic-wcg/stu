var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');


router.get('/', function(req, res, next) {
    res.render('show', { title: '学生信息管理' });
});



module.exports = router;
