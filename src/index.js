const DURATION_IN_SECONDS = {
  epochs: ['year', 'month', 'day', 'hour', 'minute'],
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

export const getDuration = (seconds) => {
  let epoch;
  let interval;

  for (let i = 0; i < DURATION_IN_SECONDS.epochs.length; i += 1) {
    epoch = DURATION_IN_SECONDS.epochs[i];
    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
    if (interval >= 1) {
      return { interval, epoch };
    }
  }
  return null;
};

export const datum = (date, options = {
  exception: '0 minutes ago',
}) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const duration = getDuration(seconds) || {};
  const suffix = (duration.interval > 1 || duration.interval === 0) ? 's' : '';
  return (duration.interval)
    ? `${duration.interval} ${duration.epoch}${suffix} ago`
    : options.exception;
};

export default datum;
