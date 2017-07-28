'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on gltcore-p2p Module {0}'
};

module.exports = require('gltcore-lib').errors.extend(spec);
