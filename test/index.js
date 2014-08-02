'use strict';

var _ = require('lodash');
var assert = require('assert');

describe('google-discovery-document', function () {
  var DiscoveryDocument = require('../');

  describe('#validate', function () {

    _.each(require('./fixtures'), function (doc, name) {
      it('test document ' + name, function () {
        assert(DiscoveryDocument.validate(doc));
      });
    });

  });

});
