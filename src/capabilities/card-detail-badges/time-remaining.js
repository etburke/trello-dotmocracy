const timeRemaining = async (t) => {
  const dynamic = async () => ({
    text: `${3 - await t.get('board', 'shared', 'timeRemaining', 0)} Seconds Remaining`,
    icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
    color: 'yellow',
    refresh: 10, // in seconds
  });

  return {
    dynamic,
  };
};

export default timeRemaining;
