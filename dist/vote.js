// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({1:[function(require,module,exports) {
"use strict";function e(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(a,o){try{var s=r[a](o),c=s.value}catch(e){return void t(e)}if(!s.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}return n("next")})}}var r=TrelloPowerUp.iframe(),t=r.getContext();window.add.addEventListener("click",function(){var n=e(regeneratorRuntime.mark(function e(n){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,r.get(t.card,"shared","votes",0);case 4:return a=e.sent,e.next=7,r.get("board","shared",t.member+"votes",0);case 7:if(o=e.sent,!(a&&o<3)){e.next=13;break}return e.next=11,r.set(t.card,"shared","votes",a+1);case 11:return e.next=13,r.set("board","shared",t.member+"votes",a+1);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1);case 18:case"end":return e.stop()}},e,void 0,[[1,15]])}));return function(e){return n.apply(this,arguments)}}()),window.remove.addEventListener("click",function(){var n=e(regeneratorRuntime.mark(function e(n){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,a=r.get(t.card,"shared","votes",0),o=r.get("board","shared",t.member+"votes",0),!(a&&o<=3&&o>0)){e.next=9;break}return e.next=7,r.set(t.card,"shared","votes",a?a-1:a);case 7:return e.next=9,r.set("board","shared",t.member+"votes",a?a-1:a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1);case 14:case"end":return e.stop()}},e,void 0,[[1,11]])}));return function(e){return n.apply(this,arguments)}}()),window.reset.addEventListener("click",function(){var t=e(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,r.getAll();case 4:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1);case 11:case"end":return e.stop()}},e,void 0,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()),r.render(function(){return r.sizeTo("#vote").done()});
},{}]},{},[1])