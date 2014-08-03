'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var DirectoryList = function (doc) { };

DirectoryList.template = {
  kind: 'discovery#directoryList',
  discoveryVersion: _.isString,
  items: _.isArray
};

DirectoryList.validate = function (doc) {
  return _.similar(DirectoryList.template, doc);
};

module.exports = DirectoryList;
