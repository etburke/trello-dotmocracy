const addVote = {
  text: 'Add Vote',
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  color: 'yellow',
  refresh: 10, // in seconds
  callback: async (t) => {
    const context = t.getContext();
    try {
      const votes = await t.get('board', 'shared', `${context.card}:votes`, 0);
      const totalVotesCast = await t.get('board', 'shared', `${context.member}:votes`, 0);
      const votesCastForCard = await t.get('board', 'shared', `${context.member}:${context.card}:votes`, 0);

      if (votes != null && totalVotesCast < 3) {
        await t.set('board', 'shared', `${context.card}:votes`, (votes + 1));
        await t.set('board', 'shared', `${context.member}:votes`, (totalVotesCast + 1));
        await t.set('board', 'shared', `${context.member}:${context.card}:votes`, (votesCastForCard + 1));
      }
    } catch (e) {
      console.log('add exception', e);
    }
  },
};

export default addVote;
