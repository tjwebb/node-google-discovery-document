'use strict';

var _ = require('lodash');
_.mixin(require('congruence'));

var DiscoveryDocument = function (doc) {
  if (!DiscoveryDocument.validate(doc)) {
    throw new Error('Discovery doc not valid');
  }

  this.data = doc;
};

DiscoveryDocument.validate = function (doc) {
  if (doc.kind === 'discovery#directoryList') {
    return require('./directoryList').validate(doc);
  }
  else if (doc.kind === 'discovery#restDescription') {
    return require('./restDescription').validate(doc);
  }
  else {
    throw new TypeError('discovery document kind not recognized');
  }
};

module.exports = DiscoveryDocument;
