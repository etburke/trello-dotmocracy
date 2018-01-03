const resetVotes = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Reset Votes',
  callback: async (t) => {
    const { board } = await t.getAll();
    const items = Object.keys(board.shared)
      .filter(i => i.includes('votes'));
    await t.remove('board', 'shared', items);
  },
};

export default resetVotes;
