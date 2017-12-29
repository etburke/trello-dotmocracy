const resetVotes = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Reset Votes',
  callback: t => t.getAll()
    .then(({ board }) => {
      const promises = Object.keys(board.shared)
        .filter(i => i.includes('votes'))
        .map(i => t.remove('board', 'shared', i));
      return Promise.all(promises);
    })
    .then(res => console.log('res', res)),
};

export default resetVotes;
