
require('./action.js').init();

const Multivocal = require('multivocal');
exports.webhook = Multivocal.processFirebaseWebhook;
