const express = require('express');
var router = express.Router();

router.get('/contact', function(req, res) {
    res.render('contact')
})

router.get('/leadership', function(req, res) {
    res.render('leadership')
})


module.exports = router;