import addVote from './add-vote';
import removeVote from './remove-vote';
import votes from '../card-badges/votes';
import votesRemaining from './votes-remaining';
import timeRemaining from './time-remaining';

const cardDetailBadges = async t => ([
  await votes(t),
  addVote,
  removeVote,
  await votesRemaining(t),
  await timeRemaining(t),
]);

export default cardDetailBadges;
