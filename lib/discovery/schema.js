'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var Schema = function () { };

Schema.template = {
  id: _.isString,
  type: _.isString,
  properties: _.isObject
};

Schema.validate = function (schema) {
  return _.similar(Schema.template, schema);
};

module.exports = Schema;
