import 'babel-core/register';
import 'babel-polyfill';

const t = window.TrelloPowerUp.iframe();
const context = t.getContext();

window.add.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log('add');
  try {
    const votes = await t.get('board', 'shared', `${context.card}:votes`, 0);
    const votesCast = await t.get('board', 'shared', `${context.member}:votes`, 0);
    console.log('votes', votes);
    console.log('votesCast', votesCast);
    if (votes != null && votesCast < 3) {
      await t.set('board', 'shared', `${context.card}:votes`, (votes + 1));
      await t.set('board', 'shared', `${context.member}:votes`, (votesCast + 1));
    }
  } catch (e) {
    console.log('add exception', e);
  }
});

window.remove.addEventListener('click', async (event) => {
  event.preventDefault();
  console.log('remove');
  try {
    const votes = await t.get('board', 'shared', `${context.card}:votes`, 0);
    const votesCast = await t.get('board', 'shared', `${context.member}:votes`, 0);
    console.log('votes', votes);
    console.log('votesCast', votesCast);
    if (votes && votesCast <= 3 && votesCast > 0) {
      await t.set('board', 'shared', `${context.card}:votes`, (votes ? votes - 1 : votes));
      await t.set('board', 'shared', `${context.member}:votes`, (votesCast ? votesCast - 1 : votesCast));
    }
  } catch (e) {
    console.log('remove exception', e);
  }
});

t.render(() => t.sizeTo('#vote').done());
