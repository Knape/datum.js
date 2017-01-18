'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DURATION_IN_SECONDS = {
  epochs: ['year', 'month', 'day', 'hour', 'minute'],
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

var getDuration = exports.getDuration = function getDuration(seconds) {
  var epoch = void 0;
  var interval = void 0;

  for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i += 1) {
    epoch = DURATION_IN_SECONDS.epochs[i];
    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
    if (interval >= 1) {
      return { interval: interval, epoch: epoch };
    }
  }
  return null;
};

var timeSince = exports.timeSince = function timeSince(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    exeption: '0 minutes ago'
  };

  var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  var duration = getDuration(seconds) || {};
  var suffix = duration.interval > 1 || duration.interval === 0 ? 's' : '';
  return duration.interval ? duration.interval + ' ' + duration.epoch + suffix + ' ago' : options.exeption;
};

exports.default = timeSince;