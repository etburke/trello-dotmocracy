TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Dotmocratize',
      callback: function(t){
        return t.popup({
          title: "Vote",
          url: 'vote.html'
        });
      }
    }];
  },
  'card-badges': function (t, opts) {
    return t.card('id')
    .get('id')
    .then(function(cardId) {
      console.log('We just loaded the card name for fun: ' + cardId);
      return [{
        // dynamic badges can have their function rerun
        // after a set number of seconds defined by refresh.
        // Minimum of 10 seconds.
        dynamic: function() {
          // we could also return a Promise that resolves to
          // this as well if we needed to do something async first
          return t.get(cardId, 'shared', 'votes', 0)
          .then(function(votes) {
            return {
              text: 'Votes ' + votes,
              icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
              color: 'green',
              refresh: 10 // in seconds
            };
          });
        },
      }];
    });
  },
});
