import moment from 'moment';

const checkTimer = async (t) => {
  const timerExpiration = await t.get('board', 'shared', 'timerExpiration', '');
  const now = moment.utc();
  const seconds = moment.utc(timerExpiration).diff(now, 'seconds');
  return seconds > 0 ? Math.floor(seconds) : null;
};

const formatSeconds = (seconds) => {
  if (seconds < 60) {
    return seconds < 15 ?
      'a few seconds remaining' :
      `about ${seconds} remaining`;
  }
  return `about ${moment.duration(seconds, 'seconds').humanize()} remaining`;
};

const timeRemaining = async (t) => {
  const dynamic = async () => {
    const secondsRemaining = await checkTimer(t);
    const text = secondsRemaining ?
      formatSeconds(secondsRemaining) :
      'Time has elapsed';
    return {
      text,
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      color: 'yellow',
      refresh: 10, // in seconds
    };
  };

  return {
    dynamic,
  };
};

export default timeRemaining;
