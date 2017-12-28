import votes from './votes';

const cardBadges = async t => ([
  await votes(t),
]);

export default cardBadges;
