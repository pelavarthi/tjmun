const express = require('express');
var router = express.Router();


router.get('/invitation', function(req, res) {
    res.render('invitation')
})
router.get('/secstaff', function(req, res) {
    res.render('secstaff')
})
router.get('/committees', function(req, res) {
    res.render('committees')
})
router.get('/schedule', function(req, res) {
    res.render('schedule')
})
router.get('/positionpapers', function(req, res) {
    res.render('positionpapers')
})
router.get('/guests', function(req, res) {
    res.render('guests')
})

router.get('/registration', function(req, res) {
    res.render('registration')
})

module.exports = router;