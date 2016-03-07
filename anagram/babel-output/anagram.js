'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
    function Anagram(word) {
        _classCallCheck(this, Anagram);

        this.word = word;
    }

    _createClass(Anagram, [{
        key: 'matches',
        value: function matches(words) {
            var _this = this;

            words = Array.isArray(words) ? words : [].slice.call(arguments, 0);

            return words.filter(function (word) {
                if (word.toLowerCase() === _this.word.toLowerCase()) return false;

                return _this.normalize(word) === _this.normalize(_this.word);
            });
        }
    }, {
        key: 'normalize',
        value: function normalize(word) {
            return word.toLowerCase().split('').sort().join();
        }
    }]);

    return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];