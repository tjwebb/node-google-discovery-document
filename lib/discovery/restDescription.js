'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var RestDescription = function (doc) { };

RestDescription.Schema = require('./schema');
RestDescription.Resource = require('./resource');

RestDescription.template = {
  kind: 'discovery#restDescription',
  discoveryVersion: _.isString,
  id: _.isString,
  name: _.isString,
  version: _.isString,
  revision: _.isString,
  title: _.isString,
  description: _.isString,
  icons: _.isObject,
  documentationLink: _.isString,
  protocol: _.isString,
  baseUrl: _.isString,
  basePath: _.isString,
  rootUrl: _.isString,
  servicePath: _.isString,
  batchPath: _.isString,
  parameters: _.similar({
    oauth_token: _.similar({
      type: 'string',
      description: _.isString,
      location: _.isString
    })
  }),
  auth: _.similar({
    oauth2: _.similar({
      scopes: _.isObject
    })
  }),
  schemas: function (schemas) {
    return _.isObject(schemas) && _.all(schemas, RestDescription.Schema.validate);
  },
  resources: function (resources) {
    return _.isObject(resources) && _.all(resources, RestDescription.Resource.validate);
  }
};

RestDescription.validate = function (doc) {
  return _.similar(RestDescription.template, doc);
};

module.exports = RestDescription;
