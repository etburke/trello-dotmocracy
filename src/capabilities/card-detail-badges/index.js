import addVote from './add-vote';
import removeVote from './remove-vote';
import votes from '../card-badges/votes';
import votesRemaining from './votes-remaining';

const cardDetailBadges = async t => ([
  await votes(t),
  addVote,
  removeVote,
  await votesRemaining(t),
]);

export default cardDetailBadges;
