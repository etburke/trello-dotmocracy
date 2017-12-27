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
"use strict";function e(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(a,u){try{var c=r[a](u),o=c.value}catch(e){return void t(e)}if(!c.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}var r=function(){return[{icon:"https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",text:"Dotmocratize",callback:function(e){return e.popup({title:"Vote",url:"vote.html"})}}]},t=function(){var r=e(regeneratorRuntime.mark(function r(t){var n,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.card("id").get("id");case 2:return n=r.sent,a=function(){var r=e(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(n,"shared","votes",0);case 2:return r=e.sent,e.abrupt("return",{text:"Votes "+r,icon:"https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",color:"green",refresh:10});case 4:case"end":return e.stop()}},e,void 0)}));return function(){return r.apply(this,arguments)}}(),r.abrupt("return",[{dynamic:a}]);case 5:case"end":return r.stop()}},r,void 0)}));return function(e){return r.apply(this,arguments)}}(),n=function(){var r=e(regeneratorRuntime.mark(function r(t){var n,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.card("id").get("id");case 2:return n=r.sent,a=function(){var r=e(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get(n,"shared","votes",0);case 2:return r=e.sent,e.abrupt("return",{text:"Votes "+r,color:"green",refresh:10});case 4:case"end":return e.stop()}},e,void 0)}));return function(){return r.apply(this,arguments)}}(),r.abrupt("return",[{dynamic:a}]);case 5:case"end":return r.stop()}},r,void 0)}));return function(e){return r.apply(this,arguments)}}();TrelloPowerUp.initialize({"card-buttons":r,"card-badges":t,"card-detail-badges":n});
},{}]},{},[1])