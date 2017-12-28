import votes from '../card-badges/votes';

const cardDetailBadges = async t => ([
  await votes(t),
]);

export default cardDetailBadges;
