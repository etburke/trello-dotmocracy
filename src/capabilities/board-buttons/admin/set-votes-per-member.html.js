const t = TrelloPowerUp.iframe();

const resetAllVotes = async (votesPerMember) => {
  const { board } = await t.getAll();
  await t.set('board', 'shared', 'votesPerMember', votesPerMember);
  const items = Object.keys(board.shared)
    .filter(i => i.includes('votes'));
  await t.remove('board', 'shared', items);
};

window['set-votes-per-member'].addEventListener('submit', async (event) => {
  event.preventDefault();

  const { value } = window['votes-per-member'];

  await resetAllVotes(value);

  t.closePopup();
});

t.render(() => {
  t.sizeTo('#set-votes-per-member').done();
});
