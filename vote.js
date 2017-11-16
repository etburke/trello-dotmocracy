var t = TrelloPowerUp.iframe();

window.add.addEventListener('click', function(event) {
  event.preventDefault();

  return t.get(context.card, 'shared', 'votes', 0)
  .then(function(votes) {
    return t.set(context.card, 'shared', 'votes', (votes + 1));
  });
});

window.remove.addEventListener('click', function(event) {
  event.preventDefault();

  return t.get(context.card, 'shared', 'votes', 0)
  .then(function(votes) {
    return t.set(context.card, 'shared', 'votes', (votes ? votes - 1 : votes));
  });
});

t.render(function(){
  t.sizeTo('#vote').done();
});
