"use strict";

const recipe = require('../models').recipe;

exports.list = function (req, res) {
  recipe.findAll().then(recipe => {
    res.jsonp(recipe);
  });
};

exports.create = function (req, res) {
  res.jsonp(recipe.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  recipe.findById(id).then(recipe => {
    res.jsonp(recipe);
  });
};
