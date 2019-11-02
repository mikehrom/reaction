"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconExpand = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

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

var IconExpand =
/*#__PURE__*/
function (_Component) {
  _inherits(IconExpand, _Component);

  function IconExpand() {
    _classCallCheck(this, IconExpand);

    return _possibleConstructorReturn(this, _getPrototypeOf(IconExpand).apply(this, arguments));
  }

  _createClass(IconExpand, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        className: "expand",
        viewBox: "0 0 27 27",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("g", null, _react.default.createElement("circle", {
        fill: "#000000",
        fillRule: "nonzero",
        cx: "13.9575195",
        cy: "13.0588379",
        r: "13"
      }), _react.default.createElement("g", {
        transform: "translate(8.000000, 7.000000)",
        stroke: "#FFFFFF"
      }, _react.default.createElement("g", null, _react.default.createElement("g", {
        transform: "translate(0.382532, 0.382532)"
      }, _react.default.createElement("polyline", {
        points: "4.78165571 0 11.1571966 0 11.1571966 6.37554094"
      }), _react.default.createElement("polyline", {
        transform: "translate(3.187769, 7.969426) rotate(-180.000000) translate(-3.187769, -7.969426) ",
        points: "-1.01881144e-06 4.78165537 6.37553992 4.78165537 6.37553992 11.1571963"
      }), _react.default.createElement("path", {
        d: "M10.360254,0.796942618 L0.796942618,10.360254",
        strokeLinecap: "square"
      })))))));
    }
  }]);

  return IconExpand;
}(_react.Component);

exports.IconExpand = IconExpand;
//# sourceMappingURL=IconExpand.js.map