import addVote from './add-vote';
import votes from '../card-badges/votes';
import votesRemaining from './votes-remaining';

const cardDetailBadges = async t => ([
  addVote,
  await votes(t),
  await votesRemaining(t),
]);

export default cardDetailBadges;
