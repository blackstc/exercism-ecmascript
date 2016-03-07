'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
    function PhoneNumber(num) {
        _classCallCheck(this, PhoneNumber);

        this.num = num.replace(/[() -. ]/g, '');
        this.error = '0000000000';
    }

    _createClass(PhoneNumber, [{
        key: 'number',
        value: function number() {
            if (this.num.length === 11 && this.num.charAt(0) === '1') {
                return this.num.substring(1, 11);
            } else if (this.num.length !== 10) {
                return this.error;
            }

            return this.num;
        }
    }, {
        key: 'areaCode',
        value: function areaCode() {
            return this.num.substring(0, 3);
        }
    }, {
        key: 'toString',
        value: function toString() {
            var areaCodeString = '(' + this.num.substring(0, 3) + ')';
            var numString = this.num.substring(3, 6) + '-' + this.num.substring(6, 10);

            return areaCodeString + ' ' + numString;
        }
    }, {
        key: '_formatNumber',
        value: function _formatNumber() {
            return this.num.replace(/[()-. ]/g, '');
        }
    }]);

    return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];