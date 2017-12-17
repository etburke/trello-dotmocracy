var t = TrelloPowerUp.iframe();
var context = t.getContext();

window.add.addEventListener('click', function(event) {
  event.preventDefault();

  return t.get(context.card, 'shared', 'votes', 0)
  .then(function(votes) {
    return t.get(context.member, 'shared', 'votes', 0)
    .then(function (votesCast) {
      console.log('votesCast', votesCast);
      if (votesCast < 3) {
        return votes;
      }
    });
  })
  .then(function(votes) {
    if (votes) {
      return t.set(context.card, 'shared', 'votes', (votes + 1))
      .then(function() {
        return t.set(context.member, 'shared', 'votes', (votes + 1));
      });
    }
  });
});

window.remove.addEventListener('click', function(event) {
  event.preventDefault();

  return t.get(context.card, 'shared', 'votes', 0)
  .then(function(votes) {
    return t.get(context.member, 'shared', 'votes', 0)
    .then(function (votesCast) {
      console.log('votesCast', votesCast);
      if (votesCast >= 3) {
        return votes;
      }
    });
  })
  .then(function(votes) {
    if (votes) {
      return t.set(context.card, 'shared', 'votes', (votes ? votes - 1 : votes))
      .then(function() {
        return t.set(context.member, 'shared', 'votes', (votes + 1));
      });
    }
  });
});

t.render(function(){
  t.sizeTo('#vote').done();
});
