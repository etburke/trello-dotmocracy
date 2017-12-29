import 'babel-core/register';
import 'babel-polyfill';

const t = window.TrelloPowerUp.iframe();
const context = t.getContext();

window.add.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const votes = await t.get('board', 'shared', `${context.card}:votes`, 0);
    const totalVotesCast = await t.get('board', 'shared', `${context.member}:votes`, 0);
    const votesCastForCard = await t.get('board', 'shared', `${context.member}:${context.card}:votes`, 0);

    if (votes != null && totalVotesCast < 3) {
      await t.set('board', 'shared', `${context.card}:votes`, (votes + 1));
      await t.set('board', 'shared', `${context.member}:votes`, (totalVotesCast + 1));
      await t.set('board', 'shared', `${context.member}:${context.card}:votes`, (votesCastForCard + 1));
    }
  } catch (e) {
    console.log('add exception', e);
  }
});

window.remove.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const votes = await t.get('board', 'shared', `${context.card}:votes`, 0);
    const totalVotesCast = await t.get('board', 'shared', `${context.member}:votes`, 0);
    const votesCastForCard = await t.get('board', 'shared', `${context.member}:${context.card}:votes`, 0);

    if (votes && totalVotesCast <= 3 && totalVotesCast > 0 && votesCastForCard > 0) {
      await t.set('board', 'shared', `${context.card}:votes`, (votes - 1));
      await t.set('board', 'shared', `${context.member}:votes`, (totalVotesCast - 1));
      await t.set('board', 'shared', `${context.member}:${context.card}:votes`, (votesCastForCard - 1));
    }
  } catch (e) {
    console.log('remove exception', e);
  }
});

t.render(() => t.sizeTo('#vote').done());
