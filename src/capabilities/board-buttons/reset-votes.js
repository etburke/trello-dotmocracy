const resetVotes = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Reset Votes',
  callback: async (t) => {
    const reset = item => t.set('board', 'shared', item, 0)
      .then(() => console.log(`finished ${item}`));
    try {
      const { board } = await t.getAll();
      console.log('board', board);
      const promises = Object.keys(board.shared)
        .filter(i => i.includes('votes'))
        .map(i => reset(i));
        // .map(i => reset(i));
      console.log('promises', promises);
      // await reset(promises[0]);
      // await reset(promises[1]);
      // await reset(promises[2]);
      // await reset(promises[3]);
      await Promise.all(promises);
    } catch (ex) {
      console.log('Promise.all ex', ex);
    }
  },
};

export default resetVotes;
