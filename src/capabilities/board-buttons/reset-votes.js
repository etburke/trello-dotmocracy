const resetVotes = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Reset Votes',
  callback: async (t) => {
    const reset = async (item) => {
      console.log('resetting item', item);
      await t.set('board', 'shared', item, 0);
    };
    const { board } = await t.getAll();
    console.log('board', board);
    const promises = Object.keys(board.shared)
      .filter(i => i.includes('votes'))
      .map(i => reset(i));
    console.log('promises', promises);
    await Promise.all(promises);
  },
};

export default resetVotes;
