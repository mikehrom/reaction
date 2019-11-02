"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconLock = void 0;

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

var IconLock =
/*#__PURE__*/
function (_Component) {
  _inherits(IconLock, _Component);

  function IconLock() {
    _classCallCheck(this, IconLock);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconLock).apply(this, arguments));
  }

  _createClass(IconLock, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        width: this.props.width,
        height: this.props.height,
        viewBox: "0 0 8 11",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: this.props.color,
        fillRule: "evenodd",
        transform: "translate(-1008.000000, -224.000000)"
      }, _react.default.createElement("g", {
        transform: "translate(987.000000, 209.000000)",
        fill: this.props.color
      }, _react.default.createElement("g", {
        transform: "translate(21.000000, 14.500000)"
      }, _react.default.createElement("g", {
        transform: "translate(0.000000, 1.000000)"
      }, _react.default.createElement("path", {
        d: "M1.03703704,2.98507463 C1.03703704,1.33646343 2.36360074,0 4,0 C5.63639926,0 6.96296296,1.33646343 6.96296296,2.98507463 L6.96296296,4.02985075 L8,4.02985075 L8,10 L0,10 L0,4.02985075 L1.03703704,4.02985075 L1.03703704,2.98507463 Z M2.07407407,2.98507463 L2.07407407,4.02985075 L5.92592593,4.02985075 L5.92592593,2.98507463 C5.92592593,1.91347735 5.06365952,1.04477612 4,1.04477612 C2.93634048,1.04477612 2.07407407,1.91347735 2.07407407,2.98507463 Z"
      }))))));
    }
  }]);

  return IconLock;
}(_react.Component);

exports.IconLock = IconLock;

_defineProperty(IconLock, "defaultProps", {
  color: "black",
  width: "15px",
  height: "15px"
});
//# sourceMappingURL=IconLock.js.map