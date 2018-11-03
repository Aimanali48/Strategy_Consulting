const express = require('express'),
    router = express.Router();


router.get('/service', (req, res) => {
    res.render('service');
})


module.exports = router;