'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var t = TrelloPowerUp.iframe();
var context = t.getContext();

window.add.addEventListener('click', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
    var votes, votesCast;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();

            _context.prev = 1;
            _context.next = 4;
            return t.get(context.card, 'shared', 'votes', 0);

          case 4:
            votes = _context.sent;
            _context.next = 7;
            return t.get('board', 'shared', context.member + 'votes', 0);

          case 7:
            votesCast = _context.sent;

            if (!(votes && votesCast < 3)) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return t.set(context.card, 'shared', 'votes', votes + 1);

          case 11:
            _context.next = 13;
            return t.set('board', 'shared', context.member + 'votes', votes + 1);

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](1);

            console.log('add exception', _context.t0);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 15]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

window.remove.addEventListener('click', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
    var votes, votesCast;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();

            _context2.prev = 1;
            votes = t.get(context.card, 'shared', 'votes', 0);
            votesCast = t.get('board', 'shared', context.member + 'votes', 0);

            if (!(votes && votesCast <= 3 && votesCast > 0)) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return t.set(context.card, 'shared', 'votes', votes ? votes - 1 : votes);

          case 7:
            _context2.next = 9;
            return t.set('board', 'shared', context.member + 'votes', votes ? votes - 1 : votes);

          case 9:
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](1);

            console.log('remove exception', _context2.t0);

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[1, 11]]);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

window.reset.addEventListener('click', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
    var allData;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            event.preventDefault();

            _context3.prev = 1;
            _context3.next = 4;
            return t.getAll();

          case 4:
            allData = _context3.sent;

            console.log('allData', allData);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);

            console.log('reset exception', _context3.t0);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[1, 8]]);
  }));

  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}());

t.render(function () {
  return t.sizeTo('#vote').done();
});