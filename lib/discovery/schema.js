'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var Schema = function () { };

Schema.template = {
  id: _.isString,
  type: _.isString,
  properties: function (properties) {
    return _.isObject(properties) || _.isUndefined(properties);
  },
  additionalProperties: function (additionalProperties) {
    return _.isObject(additionalProperties) || _.isUndefined(additionalProperties);
  },
  description: function (description) {
    return _.isString(description) || _.isUndefined(description);
  }
};

Schema.validate = function (schema) {
  return _.similar(Schema.template, schema);
};

module.exports = Schema;
