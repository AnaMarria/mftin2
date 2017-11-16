"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  });
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  return user.findById(id).then(user => {
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    return res.jsonp(user);
  }).catch(error => res.status(400).send(error));
};

exports.delete = function (req, res) {
  return user
    .findById(req.params.id)
    .then(usertobedeleted => {
      if (!usertobedeleted) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return usertobedeleted
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};


exports.update = function (req, res) {
   return user
    .findById(req.params.id)
    .then(userToBeUpdated => {
      if (!userToBeUpdated) {
        return res.status(404).send({
          message: 'TodoItem Not Found',
        });
      }

      return userToBeUpdated
        .update({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          photo: req.body.photo
        })
        .then(userToBeUpdated => res.status(200).send(userToBeUpdated))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));

};
