var express = require('express');
var router = express.Router();
var recipe = require('../service/').recipe;

router.get('/recipe/', recipe.list);
router.get('/recipe/:id', recipe.findById);
router.post('/createrecipe', recipe.create);

router.get('/recipe', (req, res) => res.status(200).send({
    message: recipe
 }));
  
router.post('/createrecipe', (req, res) => res.status(200).send({
    message: recipe.create
}));
module.exports = router;