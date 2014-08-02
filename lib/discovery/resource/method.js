'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var Method = function () { };

Method.template = {
  id: _.isString,
  path: _.isString,
  httpMethod: _.isString,
  description: _.isString,
  scopes: _.isArray,
  parameters: _.isObject
};

Method.validate = function (schema) {
  return _.similar(Method.template, schema);
};

module.exports = Method;
