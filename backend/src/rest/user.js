var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/userlist', user.list);
router.get('/userlist/:id', user.findById);
router.post('/createuser', user.create);

router.get('/userlist', (req, res) => res.status(200).send({
    message: user
 }));
  
router.post('/createuser', (req, res) => res.status(200).send({
    message: user.create
}));

module.exports = router;
