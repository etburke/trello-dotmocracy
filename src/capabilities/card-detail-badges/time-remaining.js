import moment from 'moment';

const checkTimer = async (t) => {
  const timerExpiration = await t.get('board', 'shared', 'timerExpiration', '');
  const now = moment.utc();
  const diff = moment.utc(timerExpiration).diff(now, 'seconds');
  const { seconds } = diff.toObject();
  return seconds > 0 ? diff.format() : null;
};

const timeRemaining = async (t) => {
  const dynamic = async () => {
    const durationRemaining = await checkTimer(t);
    const text = durationRemaining ?
      `${durationRemaining} Remaining` :
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
