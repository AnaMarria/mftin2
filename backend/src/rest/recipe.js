var express = require('express');
var router = express.Router();
var recipe = require('../service/').recipe;

router.get('/', recipe.list);
router.get('/:id', recipe.findById);
router.post('/', recipe.create);
router.delete('/:id', recipe.delete);

module.exports = router;