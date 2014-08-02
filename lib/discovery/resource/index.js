'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var Resource = function () { };
Resource.Method = require('./method');

Resource.template = {
  methods: function (methods) {
    return _.isObject(methods) && _.all(Resource.Method.validate);
  }
};

Resource.validate = function (schema) {
  return _.congruent(Resource.template, schema);
};

module.exports = Resource;
