"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSocialTwitter = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IconSocialTwitter =
/*#__PURE__*/
function (_Component) {
  _inherits(IconSocialTwitter, _Component);

  function IconSocialTwitter() {
    _classCallCheck(this, IconSocialTwitter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconSocialTwitter).apply(this, arguments));
  }

  _createClass(IconSocialTwitter, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: "16px",
        height: "14px",
        viewBox: "0 0 16 14",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("path", {
        d: "M15.9786472,1.9961647 C15.3802193,2.26166928 14.7456495,2.43612386 14.0957888,2.51257805 C14.7810964,2.1018105 15.2933396,1.45542502 15.537298,0.69435824 C14.8936926,1.07732426 14.189619,1.34699907 13.4542686,1.49087197 C12.8342946,0.828500604 11.967582,0.45318 11.0598622,0.45318 C9.25067784,0.458740305 7.78762253,1.92735593 7.78831756,3.73584521 C7.78762253,3.98744902 7.81542405,4.23835779 7.87033207,4.48370626 C5.23335731,4.35095397 2.77639743,3.10475056 1.11108601,1.05577808 C0.819169985,1.55620555 0.665566552,2.1254418 0.666261591,2.70510362 C0.664871514,3.80256887 1.21256158,4.82775015 2.12653675,5.4352135 C1.60595318,5.42061769 1.09649021,5.28021999 0.642630293,5.02583602 L0.642630293,5.06684327 C0.639155103,6.62859401 1.74009554,7.97488291 3.27195963,8.28139474 C2.99116422,8.36062909 2.70063827,8.40163634 2.40941728,8.40302642 C2.20229591,8.40372145 1.99517454,8.38426039 1.7922234,8.34603329 C2.22106194,9.68120158 3.45127948,10.5958718 4.85317144,10.6229783 C3.69315276,11.5362584 2.25928904,12.0311256 0.783028001,12.0283454 C0.520998616,12.0283454 0.25966427,12.0130546 -0.00028,11.9810828 C1.49961234,12.9437107 3.24554818,13.4552588 5.02762601,13.4531737 C11.0612522,13.4531737 14.3585132,8.45584932 14.3585132,4.12298146 C14.3585132,3.9798036 14.3585132,3.83940589 14.3473926,3.69970322 C14.9896079,3.23611277 15.5442483,2.66201126 15.9855976,2.00311509",
        fill: this.props.color
      })));
    }
  }]);

  return IconSocialTwitter;
}(_react.Component);

exports.IconSocialTwitter = IconSocialTwitter;

_defineProperty(IconSocialTwitter, "defaultProps", {
  color: "black"
});
//# sourceMappingURL=IconSocialTwitter.js.map