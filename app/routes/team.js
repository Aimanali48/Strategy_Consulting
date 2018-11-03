const express = require('express'),
router = express.Router();


router.get('/team', (req, res)=> {
res.render('team');
})


module.exports = router;