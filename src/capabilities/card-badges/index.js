import votes from './votes';
import votesRemaining from './votes-remaining';

const cardBadges = async t => ([
  await votes(t),
  await votesRemaining(t),
]);

export default cardBadges;
