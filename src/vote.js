import 'babel-core/register';
import 'babel-polyfill';

const t = TrelloPowerUp.iframe();
const context = t.getContext();

document.getElementById('add').addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const votes = await t.get(context.card, 'shared', 'votes', 0);
    const votesCast = await t.get('board', 'shared', `${context.member}votes`, 0);

    if (votes && votesCast < 3) {
      await t.set(context.card, 'shared', 'votes', (votes + 1));
      await t.set('board', 'shared', `${context.member}votes`, (votes + 1));
    }
  } catch (e) {
    console.log('add exception', e);
  }
});

document.getElementById('remove').addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const votes = t.get(context.card, 'shared', 'votes', 0);
    const votesCast = t.get('board', 'shared', `${context.member}votes`, 0);
    if (votes && votesCast <= 3 && votesCast > 0) {
      await t.set(context.card, 'shared', 'votes', (votes ? votes - 1 : votes));
      await t.set('board', 'shared', `${context.member}votes`, (votes ? votes - 1 : votes));
    }
  } catch (e) {
    console.log('remove exception', e);
  }
});

document.getElementById('reset').addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    const allData = await t.getAll();
    console.log('allData', allData);
  } catch (e) {
    console.log('reset exception', e);
  }
});

t.render(() => t.sizeTo('#vote').done());
