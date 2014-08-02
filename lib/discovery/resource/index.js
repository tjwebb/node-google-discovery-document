'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var Resource = function () { };
Resource.Method = require('./method');

Resource.template = {
  methods: function (methods) {
    return _.all(methods, Resource.Method.validate);
  },
  resources: function (resources) {
    return _.isUndefined(resources) || Resource.validate(resources);
  }
};

Resource.validate = function (resource) {
  return _.similar(Resource.template, resource);
};

module.exports = Resource;
