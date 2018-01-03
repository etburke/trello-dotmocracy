// import setVotesPerMember from './set-votes-per-member';
import setTimer from './set-timer';
import resetVotes from './reset-votes';

const admin = {
  icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
  text: 'Admin',
  callback: t => t.popup({
    title: 'Admin',
    items: [
      setTimer,
      // setVotesPerMember,
      resetVotes,
    ],
  }),
};

export default admin;
