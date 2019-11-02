"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSocialFacebook = void 0;

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

var IconSocialFacebook =
/*#__PURE__*/
function (_Component) {
  _inherits(IconSocialFacebook, _Component);

  function IconSocialFacebook() {
    _classCallCheck(this, IconSocialFacebook);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconSocialFacebook).apply(this, arguments));
  }

  _createClass(IconSocialFacebook, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: "14px",
        height: "14px",
        viewBox: "0 0 14 14",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("path", {
        d: "M13.22846,-0.00014 L0.77266,-0.00014 C0.34566,-0.00014 -0.00014,0.34636 -0.00014,0.77266 L-0.00014,13.22706 C-0.00014,13.65336 0.34566,13.99986 0.77266,13.99986 L7.47866,13.99986 L7.47866,8.57836 L5.65376,8.57836 L5.65376,6.46576 L7.47866,6.46576 L7.47866,4.90686 C7.47866,3.09876 8.58256,2.11456 10.19606,2.11456 C10.74066,2.11246 11.28526,2.14046 11.82706,2.19786 L11.82706,4.08576 L10.70776,4.08576 C9.83066,4.08576 9.65846,4.50366 9.65846,5.11476 L9.65846,6.46366 L11.75146,6.46366 L11.47846,8.57696 L9.65986,8.57696 L9.65986,13.99986 L13.22776,13.99986 C13.65406,13.99986 13.99986,13.65406 13.99986,13.22706 L13.99986,0.77266 C13.99986,0.34636 13.65406,-0.00014 13.22776,-0.00014",
        fill: this.props.color
      })));
    }
  }]);

  return IconSocialFacebook;
}(_react.Component);

exports.IconSocialFacebook = IconSocialFacebook;

_defineProperty(IconSocialFacebook, "defaultProps", {
  color: "black"
});
//# sourceMappingURL=IconSocialFacebook.js.map