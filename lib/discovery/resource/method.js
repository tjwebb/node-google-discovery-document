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
  scopes: _.isArray
};

Method.validate = function (method) {
  //console.log(method);
  return _.similar(Method.template, method);
};

module.exports = Method;
