'use strict';

TrelloPowerUp.initialize({
  'card-buttons': function cardButtons(t, opts) {
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Dotmocratize',
      callback: function callback(t) {
        return t.popup({
          title: 'Vote',
          url: 'vote.html'
        });
      }
    }];
  },
  'card-badges': function cardBadges(t, opts) {
    return t.card('id').get('id').then(function (cardId) {
      return [{
        dynamic: function dynamic() {
          return t.get(cardId, 'shared', 'votes', 0).then(function (votes) {
            return {
              text: 'Votes ' + votes,
              icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
              color: 'green',
              refresh: 10 // in seconds
            };
          });
        }
      }];
    });
  },
  'card-detail-badges': function cardDetailBadges(t, opts) {
    return t.card('id').get('id').then(function (cardId) {
      return [{
        dynamic: function dynamic() {
          return t.get(cardId, 'shared', 'votes', 0).then(function (votes) {
            return {
              text: 'Votes: ' + votes,
              color: 'green',
              refresh: 10 // in seconds
            };
          });
        }
      }];
    });
  }
});