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
  return recipe.findById(id).then(recipe => {
    if (!recipe) {
      return res.status(400).send({
        message: 'Recipe Not Found',
      });
    }
    return res.jsonp(recipe);
  }).catch(error => res.status(400).send(error));
};

exports.delete = function (req, res) {
  return recipe
    .findById(req.params.id)
    .then(recipetobedeleted => {
      if (!recipetobedeleted) {
        return res.status(400).send({
          message: 'Recipe Not Found',
        });
      }
      return recipetobedeleted
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
