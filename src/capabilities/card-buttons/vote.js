const vote = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Dotmocratize',
  callback: t => t.popup({
    title: 'Vote',
    url: 'html/vote.html',
  }),
};

export default vote;
