# node-google-discovery-document
[![Build Status](https://travis-ci.org/tjwebb/node-google-discovery-document.svg?branch=master)](https://travis-ci.org/tjwebb/node-google-discovery-document)

Create and validate a [Google Discovery Document](https://developers.google.com/discovery/v1/reference/apis) for your own REST services.

## Install
```sh
$ npm install google-discovery-document --save
```

```js
var DiscoveryDocument = require('google-discovery-document');
```

## Usage

### Create

```js
var mydoc = new DiscoveryDocument({
  ...
});
```

### Validate

```js
var doc = {
  ...
};
var valid = DiscoveryDocument.validate(doc);
```

### Examples

- See [unit tests](https://github.com/tjwebb/node-google-discovery-document/blob/master/test/index.js)
