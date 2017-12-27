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
              _context.next = 14;
              break;
            }

            return _context.abrupt('return', votes);

          case 12:
            _context.next = 14;
            return t.set('board', 'shared', context.member + 'votes', votes + 1);

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](1);

            console.log('handle click exception', _context.t0);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 16]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()

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
);

window.remove.addEventListener('click', function (event) {
  event.preventDefault();

  return t.get(context.card, 'shared', 'votes', 0).then(function (votes) {
    return t.get('board', 'shared', context.member + 'votes', 0).then(function (votesCast) {
      console.log('votesCast', votesCast);
      if (votesCast <= 3 && votesCast > 0) {
        return votes;
      }
    });
  }).then(function (votes) {
    if (votes != null) {
      return t.set(context.card, 'shared', 'votes', votes ? votes - 1 : votes).then(function () {
        return t.set('board', 'shared', context.member + 'votes', votes ? votes - 1 : votes);
      });
    }
  });
});

window.reset.addEventListener('click', function (event) {
  event.preventDefault();

  return t.getAll().then(function (allData) {
    console.log('allData', allData);
  });
});

t.render(function () {
  t.sizeTo('#vote').done();
});