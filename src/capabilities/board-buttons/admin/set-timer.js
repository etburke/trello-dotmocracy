import { DateTime } from 'luxon';

const checkTimer = async (t) => {
  const timerExpiration = await t.get('board', 'shared', 'timerExpiration', '');
  const now = DateTime.utc();
  const diff = DateTime.fromISO(timerExpiration).diff(now, 'seconds').toObject();
  console.log('diff', diff);
  await t.set('board', 'shared', 'timeRemaining', diff);
};

const setNewTimer = duration => async (t) => {
  await checkTimer(t);
  const newExpiration = DateTime.utc().plus({ minutes: duration }).toString();
  await t.set('board', 'shared', 'timerExpiration', newExpiration);
  console.log('newExpiration', newExpiration);
  console.log('duration', duration);
};

const durations = [1, 2, 5, 10, 30, 60];

const setTimer = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Set Timer',
  callback: t => t.popup({
    title: 'Set Timer',
    items: durations.map(duration => ({
      text: `${duration} minutes`,
      callback: setNewTimer(duration),
    })),
  }),
};

export default setTimer;
