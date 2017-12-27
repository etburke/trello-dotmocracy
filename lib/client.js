'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var cardButtons = function cardButtons() {
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
};

var cardBadges = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
    var cardId, dynamic;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return t.card('id').get('id');

          case 2:
            cardId = _context2.sent;

            dynamic = function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var votes;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return t.get(cardId, 'shared', 'votes', 0);

                      case 2:
                        votes = _context.sent;
                        return _context.abrupt('return', {
                          text: 'Votes ' + votes,
                          icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
                          color: 'green',
                          refresh: 10 // in seconds
                        });

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function dynamic() {
                return _ref2.apply(this, arguments);
              };
            }();

            return _context2.abrupt('return', [{
              dynamic: dynamic
            }]);

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function cardBadges(_x) {
    return _ref.apply(this, arguments);
  };
}();

var cardDetailBadges = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t) {
    var cardId, dynamic;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return t.card('id').get('id');

          case 2:
            cardId = _context4.sent;

            dynamic = function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var votes;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return t.get(cardId, 'shared', 'votes', 0);

                      case 2:
                        votes = _context3.sent;
                        return _context3.abrupt('return', {
                          text: 'Votes ' + votes,
                          color: 'green',
                          refresh: 10 // in seconds
                        });

                      case 4:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, undefined);
              }));

              return function dynamic() {
                return _ref4.apply(this, arguments);
              };
            }();

            return _context4.abrupt('return', [{
              dynamic: dynamic
            }]);

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function cardDetailBadges(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

TrelloPowerUp.initialize({
  'card-buttons': cardButtons,
  'card-badges': cardBadges,
  'card-detail-badges': cardDetailBadges
});