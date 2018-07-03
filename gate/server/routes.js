module.exports = (function(debug) {
  'use strict';
  const _ = require('lodash');
  const faker = require("faker");
  const routes = require('express').Router();


  routes.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });

  return routes;
});
