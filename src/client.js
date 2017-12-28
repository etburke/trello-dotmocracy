import 'babel-core/register';
import 'babel-polyfill';
import { DateTime } from 'luxon';

const print = () => console.log('board button click');

const setTimer = duration => async (t) => {
  const timerExpiration = await t.get('board', 'shared', 'timerExpiration', '');
  const newExpiration = DateTime.utc().plus({ minutes: duration }).toString();
  await t.set('board', 'shared', 'timerExpiration', newExpiration);
  console.log('newExpiration', newExpiration);
  console.log('duration', duration);
  console.log('timerExpiration', timerExpiration);
};

const durations = [1, 2, 5, 10, 30, 60];

const boardButtons = () => ([
  {
    icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
    text: 'Reset Votes',
    callback: print,
  },
  {
    icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
    text: 'Set Timer',
    callback: t => t.popup({
      title: 'Set Timer',
      items: durations.map(duration => ({
        text: `${duration} minutes`,
        callback: setTimer(duration),
      })),
    }),
  },
]);

const cardButtons = () => ([{
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Dotmocratize',
  callback: t => t.popup({
    title: 'Vote',
    url: 'html/vote.html',
  }),
}]);

const cardBadges = async (t) => {
  const cardId = await t.card('id').get('id');

  const dynamic = async () => {
    const votes = await t.get(cardId, 'shared', 'votes', 0);
    return {
      text: `Votes ${votes}`,
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      color: 'green',
      refresh: 10, // in seconds
    };
  };

  return [{
    dynamic,
  }];
};

const cardDetailBadges = async (t) => {
  const cardId = await t.card('id').get('id');

  const dynamic = async () => {
    const votes = await t.get(cardId, 'shared', 'votes', 0);
    return {
      text: `Votes ${votes}`,
      color: 'green',
      refresh: 10, // in seconds
    };
  };

  return [{
    dynamic,
  }];
};

window.TrelloPowerUp.initialize({
  'board-buttons': boardButtons,
  'card-buttons': cardButtons,
  'card-badges': cardBadges,
  'card-detail-badges': cardDetailBadges,
});
