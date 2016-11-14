var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: '首页',
		cssPath: '/stylesheets/home.css',
		jsPath: '/javascripts/home.js'
	});
});
router.get('/about', function(req, res, next) {
	res.render('about', {
		title: '关于我们',
		cssPath: '/stylesheets/about.css',
		jsPath: '/javascripts/about.js'
	});
});
router.get('/contact', function(req, res, next) {
	res.render('contact', {
		title: '联系我们',
		cssPath: '/stylesheets/contact.css',
		jsPath: '/javascripts/contact.js'
	});
});
router.get('/login', function(req, res, next) {
	res.render('login', {
		title: '登录',
		cssPath: '/stylesheets/login.css',
		jsPath: '/javascripts/login.js'
	});
});
router.get('/res', function(req, res, next) {
	res.render('res', {
		title: '注册',
		cssPath: '/stylesheets/res.css',
		jsPath: '/javascripts/res.js'
	});
});


module.exports = router;