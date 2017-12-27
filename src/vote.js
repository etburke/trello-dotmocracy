const t = TrelloPowerUp.iframe();
const context = t.getContext();

window.add.addEventListener('click', async function (event) {
  event.preventDefault();

  try {
    const votes = await t.get(context.card, 'shared', 'votes', 0);
    const votesCast = await t.get('board', 'shared', context.member + 'votes', 0);

    if (votes && votesCast < 3) {
      return votes;
      await t.set(context.card, 'shared', 'votes', (votes + 1));
      await t.set('board', 'shared', context.member + 'votes', (votes + 1));
    }
  } catch (e) {
    console.log('handle click exception', e);
  }

  // if (votes != null) {
  //   return t.set(context.card, 'shared', 'votes', (votes + 1))
  //   .then(function() {
  //     return t.set('board', 'shared', context.member + 'votes', (votes + 1));
  //   });
  // }
  //
  // return t.get(context.card, 'shared', 'votes', 0)
  // .then(function(votes) {
  //   return t.get('board', 'shared', context.member + 'votes', 0)
  //   .then(function (votesCast) {
  //     console.log('votesCast', votesCast);
  //     if (votesCast < 3) {
  //       return votes;
  //     }
  //   });
  // })
  // .then(function(votes) {
  //   console.log('votes', votes);
  //   if (votes != null) {
  //     return t.set(context.card, 'shared', 'votes', (votes + 1))
  //     .then(function() {
  //       return t.set('board', 'shared', context.member + 'votes', (votes + 1));
  //     });
  //   }
  // });
});

window.remove.addEventListener('click', function(event) {
  event.preventDefault();

  return t.get(context.card, 'shared', 'votes', 0)
  .then(function(votes) {
    return t.get('board', 'shared', context.member + 'votes', 0)
    .then(function (votesCast) {
      console.log('votesCast', votesCast);
      if (votesCast <= 3 && votesCast > 0) {
        return votes;
      }
    });
  })
  .then(function(votes) {
    if (votes != null) {
      return t.set(context.card, 'shared', 'votes', (votes ? votes - 1 : votes))
      .then(function() {
        return t.set('board', 'shared', context.member + 'votes', (votes ? votes - 1 : votes));
      });
    }
  });
});

window.reset.addEventListener('click', function(event) {
  event.preventDefault();

  return t.getAll()
  .then(function(allData) {
    console.log('allData', allData);
  });
});

t.render(function(){
  t.sizeTo('#vote').done();
});
