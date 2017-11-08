var express = require('express');
var router = express.Router();
var recipe = require('../service/').recipe;

router.get('/', recipe.list);
router.get('/:id', recipe.findById);
router.post('/', recipe.create);

module.exports = router;