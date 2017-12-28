import 'babel-core/register';
import 'babel-polyfill';

const print = (t, opts) => console.log('board button click', opts);

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
      items: [{
        text: 'In 1 hour',
        duration: 60,
        callback: print,
      }, {
        text: 'In 2 hours',
        duration: 120,
        callback: print,
      }],
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
