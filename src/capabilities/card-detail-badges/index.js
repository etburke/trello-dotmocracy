import addVote from './add-vote';
import removeVote from './remove-vote';
import votes from '../card-badges/votes';
import votesRemaining from './votes-remaining';

const cardDetailBadges = async t => ([
  await votes(t),
  await votesRemaining(t),
  addVote,
  removeVote,
]);

export default cardDetailBadges;
