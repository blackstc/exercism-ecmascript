//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HelloWorld = (function () {
  function HelloWorld() {
    _classCallCheck(this, HelloWorld);
  }

  _createClass(HelloWorld, [{
    key: 'hello',
    value: function hello(str) {
      return str ? 'Hello, ' + str + '!' : 'Hello, World!';
    }
  }]);

  return HelloWorld;
})();

exports['default'] = HelloWorld;
module.exports = exports['default'];