TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Add Dot Vote',
    }];
  },
  'card-badges': function (t, opts) {
    return t.card('name')
    .get('name')
    .then(function(cardName){
      console.log('We just loaded the card name for fun: ' + cardName);
      return [{
        // dynamic badges can have their function rerun
        // after a set number of seconds defined by refresh.
        // Minimum of 10 seconds.
        dynamic: function(){
          // we could also return a Promise that resolves to
          // this as well if we needed to do something async first
          return {
            text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
            icon: './images/icon.svg',
            color: 'green',
            refresh: 10 // in seconds
          };
        }
      }, {
        // its best to use static badges unless you need your
        // badges to refresh you can mix and match between
        // static and dynamic
        text: 'Static',
        icon: HYPERDEV_ICON, // for card front badges only
        color: null
      }];
    });
  }
});
