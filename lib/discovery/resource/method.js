'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var Method = function () { };

Method.template = {
  id: _.isString,
  path: _.isString,
  httpMethod: _.isString,
  description: function (description) {
    return _.isString(description) || _.isUndefined(description);
  },
  scopes: function (scopes) {
    return _.isArray(scopes) || _.isUndefined(scopes);
  }
};

Method.validate = function (method) {
  return _.similar(Method.template, method);
};

module.exports = Method;
