var express = require('express');
var router = express.Router();
var recipe = require('../service/').recipe;

router.get('/', recipe.list);
router.get('/:id', recipe.findById);
router.post('/', recipe.create);

router.get('/recipe', (req, res) => res.status(200).send({
    message: recipe
 }));
  
router.post('/createrecipe', (req, res) => res.status(200).send({
    message: recipe.create
}));
module.exports = router;