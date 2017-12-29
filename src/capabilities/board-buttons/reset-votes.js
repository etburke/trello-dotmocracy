const resetVotes = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Reset Votes',
  callback: async (t) => {
    const reset = async (item) => {
      console.log('resetting item', item);
      try {
        await t.remove('board', 'shared', item);
      } catch (ex) {
        console.log('ex', ex);
      }
    };

    const { board } = await t.getAll();
    const promises = Object.keys(board.shared)
      .filter(i => i.includes('votes'))
      .map(i => reset(i));

    await Promise.all(promises);

    const after = await t.getAll();
    console.log('after', after);
  },
};

export default resetVotes;
