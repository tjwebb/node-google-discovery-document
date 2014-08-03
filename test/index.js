'use strict';

var _ = require('lodash');
var assert = require('assert');

describe('google-discovery-document', function () {
  var DiscoveryDocument = require('../');

  describe('#constructor', function () {

    it('should construct a valid document', function () {
      var doc = new DiscoveryDocument(require('./fixtures/valid/xtuple460'));

      assert(_.isObject(doc.data));
    });

  });

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
