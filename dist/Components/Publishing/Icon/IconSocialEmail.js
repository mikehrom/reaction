"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSocialEmail = void 0;

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

var IconSocialEmail =
/*#__PURE__*/
function (_Component) {
  _inherits(IconSocialEmail, _Component);

  function IconSocialEmail() {
    _classCallCheck(this, IconSocialEmail);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconSocialEmail).apply(this, arguments));
  }

  _createClass(IconSocialEmail, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: "17px",
        height: "14px",
        viewBox: "0 0 17 14",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("path", {
        d: "M8.09330005,8.15962873 L16.0866701,1.92619024 L16.0866701,1.14909566 C16.0866701,0.764718818 15.7752762,0.45402 15.3915944,0.45402 L0.795005656,0.45402 C0.411323894,0.45402 0.09993,0.764718818 0.09993,1.14909566 L0.09993,1.92619024 L8.09330005,8.15962873 Z M16.0866701,3.68820703 L16.0866701,12.7589443 C16.0866701,13.1426261 15.7752762,13.45402 15.3915944,13.45402 L0.795005656,13.45402 C0.411323894,13.45402 0.09993,13.1426261 0.09993,12.7589443 L0.09993,3.68820703 L7.66582852,9.58939935 C7.79163721,9.68740502 7.94246863,9.73606031 8.09330005,9.73606031 C8.24413147,9.73606031 8.39496288,9.68740502 8.52077158,9.58939935 L16.0866701,3.68820703 Z",
        fill: this.props.color
      })));
    }
  }]);

  return IconSocialEmail;
}(_react.Component);

exports.IconSocialEmail = IconSocialEmail;

_defineProperty(IconSocialEmail, "defaultProps", {
  color: "black"
});
//# sourceMappingURL=IconSocialEmail.js.map