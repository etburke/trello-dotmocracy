const votes = async (t) => {
  const cardId = await t.card('id').get('id');

  const dynamic = async () => ({
    text: `Votes ${await t.get(cardId, 'shared', 'votes', 0)}`,
    icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
    color: 'green',
    refresh: 10, // in seconds
  });

  return {
    dynamic,
  };
};

export default votes;
