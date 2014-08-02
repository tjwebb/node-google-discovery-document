'use strict';

var _ = require('lodash');
var assert = require('assert');

describe('google-discovery-document', function () {
  var DiscoveryDocument = require('../');

  describe('#validate', function () {
    describe('valid documents', function () {
      _.each(require('./fixtures/valid'), function (doc, name) {
        it('should validate document ' + name, function () {
          assert(DiscoveryDocument.validate(doc));
        });
      });
    });

    describe('invalid documents', function () {
      _.each(require('./fixtures/invalid'), function (doc, name) {
        it('should not validate document ' + name, function () {
          assert(!DiscoveryDocument.validate(doc));
        });
      });
    });
  });

});
