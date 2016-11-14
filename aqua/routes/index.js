var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Aqua',
		cssPath: "/stylesheets/test.css"
	});
});


router.get('/login', function(req, res, next) {
	res.render('login', {
		title: 'Sign in',
		cssPath: "/stylesheets/test.css"
	});
});


router.get('/reg', function(req, res, next) {
	res.render('reg', {
		title: 'Sign up',
		cssPath: "/stylesheets/test.css"
	});
});


router.get('/contact', function(req, res, next) {
	res.render('contact', {
		title: 'Contact',
		cssPath: "/stylesheets/test.css"
	});
});

router.get('/about', function(req, res, next) {
	res.render('about', {
		title: 'About',
		cssPath: "/stylesheets/test.css"
	});
});

module.exports = router;
