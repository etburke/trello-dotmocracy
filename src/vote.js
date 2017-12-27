import 'babel-core/register';
import 'babel-polyfill';

const t = TrelloPowerUp.iframe();
const context = t.getContext();

window.add.addEventListener('click', function add(event) {
  event.preventDefault();
  console.log('add');
  // try {
  //   const votes = await t.get(context.card, 'shared', 'votes', 0);
  //   const votesCast = await t.get('board', 'shared', `${context.member}votes`, 0);
  //
  //   if (votes && votesCast < 3) {
  //     await t.set(context.card, 'shared', 'votes', (votes + 1));
  //     await t.set('board', 'shared', `${context.member}votes`, (votes + 1));
  //   }
  // } catch (e) {
  //   console.log('add exception', e);
  // }
});

window.remove.addEventListener('click', function remove(event) {
  event.preventDefault();
  console.log('remove');
  // try {
  //   const votes = t.get(context.card, 'shared', 'votes', 0);
  //   const votesCast = t.get('board', 'shared', `${context.member}votes`, 0);
  //   if (votes && votesCast <= 3 && votesCast > 0) {
  //     await t.set(context.card, 'shared', 'votes', (votes ? votes - 1 : votes));
  //     await t.set('board', 'shared', `${context.member}votes`, (votes ? votes - 1 : votes));
  //   }
  // } catch (e) {
  //   console.log('remove exception', e);
  // }
});

window.reset.addEventListener('click', function reset(event) {
  event.preventDefault();
  console.log('reset');
  // try {
  //   const allData = await t.getAll();
  //   console.log('allData', allData);
  // } catch (e) {
  //   console.log('reset exception', e);
  // }
});

t.render(() => t.sizeTo('#vote').done());
