"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header = _styledComponents.default.div.withConfig({
  displayName: "Section__Header",
  componentId: "sc-17zqkaq-0"
})(["padding:5px 10px 3px;border-bottom:1px solid ", ";user-select:none;transition:0.4s;&:hover{background-color:", ";}"], (0, _palette.color)("black10"), (0, _palette.color)("black5"));

var Section =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Section);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Section)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: true
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpand", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });
    });

    return _this;
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var maxWidth = _palette.themeProps.grid.breakpoints.xl + "px";
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Header, {
        onClick: this.toggleExpand
      }, _react.default.createElement(_palette.Flex, {
        justifyContent: "space-between"
      }, _react.default.createElement(_palette.Sans, {
        size: "4",
        color: "black60"
      }, this.props.title), _react.default.createElement(_palette.Flex, {
        width: 2,
        justifyContent: "center"
      }, _react.default.createElement(_palette.Sans, {
        size: "6",
        color: "black60"
      }, this.state.expanded ? "-" : "+")))), this.state.expanded && _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        alignItems: "center",
        my: 2,
        mx: 1,
        maxWidth: maxWidth
      }, this.props.children));
    }
  }]);

  return Section;
}(_react.default.Component);

exports.Section = Section;
//# sourceMappingURL=Section.js.map