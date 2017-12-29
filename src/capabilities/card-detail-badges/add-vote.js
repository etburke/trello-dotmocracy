const votesRemaining = async (t) => {
  const context = t.getContext();

  const dynamic = async () => ({
    text: `Add Vote (${3 - await t.get('board', 'shared', `${context.member}:votes`, 0)} Remaining)`,
    icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
    color: 'yellow',
    refresh: 10, // in seconds
    callback: async (tt) => {
      const c = tt.getContext();
      try {
        const votes = await tt.get('board', 'shared', `${c.card}:votes`, 0);
        const totalVotesCast = await tt.get('board', 'shared', `${c.member}:votes`, 0);
        const votesCastForCard = await tt.get('board', 'shared', `${c.member}:${c.card}:votes`, 0);

        if (votes != null && totalVotesCast < 3) {
          await tt.set('board', 'shared', `${c.card}:votes`, (votes + 1));
          await tt.set('board', 'shared', `${c.member}:votes`, (totalVotesCast + 1));
          await tt.set('board', 'shared', `${c.member}:${c.card}:votes`, (votesCastForCard + 1));
        }
      } catch (e) {
        console.log('add exception', e);
      }
    },
  });

  return {
    dynamic,
  };
};

export default votesRemaining;
