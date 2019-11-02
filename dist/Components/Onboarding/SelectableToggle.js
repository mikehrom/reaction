"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _palette = require("@artsy/palette");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Fonts = require("../../Assets/Fonts");

var _Helpers = require("../Helpers");

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 50px;\n    padding: 0 5px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = _styledComponents.default.a.withConfig({
  displayName: "SelectableToggle__Link",
  componentId: "sc-1fmh22a-0"
})(["display:flex;color:black;text-decoration:none;", ";&:hover{background-color:", ";cursor:pointer;}border-top:1px solid ", ";height:70px;padding:0 15px 0 20px;", ";"], (0, _Fonts.avantgarde)("s13"), _Colors.default.gray, _Colors.default.grayRegular, _Helpers.media.sm(_templateObject()));

var FullWidthCol = _styledComponents.default.div.withConfig({
  displayName: "SelectableToggle__FullWidthCol",
  componentId: "sc-1fmh22a-1"
})(["flex:1;display:flex;align-items:center;"]);

var Col = _styledComponents.default.div.withConfig({
  displayName: "SelectableToggle__Col",
  componentId: "sc-1fmh22a-2"
})(["display:flex;align-items:center;"]);

var EmptyCircle = _styledComponents.default.div.withConfig({
  displayName: "SelectableToggle__EmptyCircle",
  componentId: "sc-1fmh22a-3"
})(["width:26px;height:26px;border:1px solid ", ";border-radius:50%;background-color:transparent;"], _Colors.default.grayRegular);

var SelectableToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectableToggle, _React$Component);

  function SelectableToggle(props) {
    var _this;

    _classCallCheck(this, SelectableToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectableToggle).call(this, props));
    _this.onSelect = _this.onSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectableToggle, [{
    key: "onSelect",
    value: function onSelect() {
      if (this.props.onSelect) {
        this.props.onSelect(this.props.selected);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement(Link, {
        href: this.props.href,
        onClick: function onClick() {
          return _this2.onSelect();
        }
      }, _react.default.createElement(FullWidthCol, null, this.props.text), _react.default.createElement(Col, null, this.props.selected ? _react.default.createElement(_palette.CircleBlackCheckIcon, {
        width: "26",
        height: "26"
      }) : _react.default.createElement(EmptyCircle, null))));
    }
  }]);

  return SelectableToggle;
}(_react.default.Component);

var _default = SelectableToggle;
exports.default = _default;
//# sourceMappingURL=SelectableToggle.js.map