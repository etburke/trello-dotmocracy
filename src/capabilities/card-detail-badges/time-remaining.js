import { DateTime } from 'luxon';

const checkTimer = async (t) => {
  const timerExpiration = await t.get('board', 'shared', 'timerExpiration', '');
  const now = DateTime.utc();
  const { seconds } = DateTime.fromISO(timerExpiration).diff(now, 'seconds').toObject();
  return seconds;
};

const timeRemaining = async (t) => {
  const dynamic = async () => {
    const secondsRemaining = await checkTimer(t);
    const text = secondsRemaining > 0 ?
      `${secondsRemaining} Seconds Remaining` :
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
