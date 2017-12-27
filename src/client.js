const cardButtons = () => ([{
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Dotmocratize',
  callback: tt => tt.popup({
    title: 'Vote',
    url: 'vote.html',
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

TrelloPowerUp.initialize({
  'card-buttons': cardButtons,
  'card-badges': cardBadges,
  'card-detail-badges': cardDetailBadges,
});
