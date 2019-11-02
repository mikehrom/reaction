"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TotalCount = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _numeral = _interopRequireDefault(require("numeral"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fonts = require("../../Assets/Fonts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TotalCount =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TotalCount, _React$Component);

  function TotalCount() {
    _classCallCheck(this, TotalCount);

    return _possibleConstructorReturn(this, _getPrototypeOf(TotalCount).apply(this, arguments));
  }

  _createClass(TotalCount, [{
    key: "render",
    value: function render() {
      var total = this.props.filter_artworks.counts.total;
      var s = total !== 1 ? "s" : "";
      return _react.default.createElement("div", {
        className: this.props.className
      }, (0, _numeral.default)(total).format("0,0"), " Work", s);
    }
  }]);

  return TotalCount;
}(_react.default.Component);

exports.TotalCount = TotalCount;
var StyledTotalCount = (0, _styledComponents.default)(TotalCount).withConfig({
  displayName: "TotalCount__StyledTotalCount",
  componentId: "sc-1vqe55j-0"
})(["font-style:italic;", ";"], (0, _Fonts.garamond)("s11"));

var _default = (0, _reactRelay.createFragmentContainer)(StyledTotalCount, {
  filter_artworks: function filter_artworks() {
    var node = require("../../__generated__/TotalCount_filter_artworks.graphql");

    if (node.hash && node.hash !== "ef252545faa2dcdc0445805a52f4e7c0") {
      console.error("The definition of 'TotalCount_filter_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/TotalCount_filter_artworks.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=TotalCount.js.map