"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dropdown = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

var _find2 = _interopRequireDefault(require("lodash/find"));

var _numeral = _interopRequireDefault(require("numeral"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Fonts = require("../../Assets/Fonts");

var _Icon = _interopRequireDefault(require("../Icon"));

var _ParamMap = require("./ParamMap");

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

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      isHovered: false,
      selected: props.selected || {}
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }, {
    key: "toggleHover",
    value: function toggleHover(value) {
      this.setState({
        isHovered: value
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(slice, value) {
      this.setState({
        selected: value,
        isHovered: false
      });
      this.props.onSelected(slice, value);
    }
  }, {
    key: "getSelectedName",
    value: function getSelectedName(id) {
      var selectedCount = (0, _find2.default)(this.props.aggregation.counts, function (count) {
        return count.id === id;
      });
      return selectedCount ? selectedCount.name : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var slice = this.props.aggregation.slice;

      var labels = _ParamMap.labelMap[this.props.aggregation.slice.toLowerCase()];

      var selectedName = this.getSelectedName(this.state.selected);
      var navItems = this.props.aggregation.counts.map(function (count) {
        return _react.default.createElement(NavItem, {
          key: count.id,
          onClick: function onClick() {
            return _this2.onSelect(slice, count.id);
          }
        }, _react.default.createElement("span", null, count.name), _react.default.createElement(NavItemCount, null, "\xA0(", (0, _numeral.default)(count.count).format("0,0"), ")"));
      });
      navItems.unshift(_react.default.createElement(NavItem, {
        key: "all",
        onClick: function onClick() {
          return _this2.onSelect(slice, "*");
        }
      }, _react.default.createElement("span", null, "All ", labels.plural)));
      var buttonColor = "white";
      var buttonTextColor = "black";
      var superLabelColor = "black";
      var navStyle = {
        display: "none"
      };

      if (selectedName) {
        buttonTextColor = _Colors.default.purpleRegular;
      }

      if (this.state.isHovered) {
        buttonColor = "black";
        buttonTextColor = "white";
        superLabelColor = "white";
        navStyle = {
          display: "block"
        };
      }

      var labelText = selectedName || labels.label;
      var superLabelText = selectedName ? labels.label : null;
      return _react.default.createElement("div", {
        className: this.props.className,
        onMouseEnter: function onMouseEnter() {
          return _this2.toggleHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.toggleHover(false);
        }
      }, _react.default.createElement(Button, {
        style: {
          backgroundColor: buttonColor,
          color: buttonTextColor
        }
      }, superLabelText && _react.default.createElement(SuperLabel, {
        style: {
          color: superLabelColor
        }
      }, superLabelText), labelText, _react.default.createElement(_Icon.default, {
        name: "arrow-down",
        fontSize: "9px",
        color: buttonTextColor,
        style: {
          position: "absolute",
          right: 15,
          lineHeight: "inherit"
        }
      })), _react.default.createElement(Nav, {
        style: navStyle
      }, navItems));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

exports.Dropdown = Dropdown;

var Button = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Button",
  componentId: "sc-14mtti6-0"
})(["", ";background:white;color:black;border:1px solid ", ";display:inline-block;line-height:160%;padding:15px 35px 15px 18px;vertical-align:middle;max-width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"], (0, _Fonts.avantgarde)("s13"), _Colors.default.grayRegular);

var Nav = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Nav",
  componentId: "sc-14mtti6-1"
})(["z-index:2;background:black;position:absolute;top:45px;left:1px;width:300px;border:1px solid #333;"]);

var SuperLabel = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__SuperLabel",
  componentId: "sc-14mtti6-2"
})(["position:absolute;font-size:9px;margin-top:-15px;color:black;"]);

var NavItem = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__NavItem",
  componentId: "sc-14mtti6-3"
})(["", ";text-align:left;color:white;display:block;border-bottom:1px solid #333;padding:15px 18px 10px 18px;text-transform:capitalize;&:hover{background:", ";}"], (0, _Fonts.garamond)("s11"), _Colors.default.grayBold);

var NavItemCount = _styledComponents.default.span.withConfig({
  displayName: "Dropdown__NavItemCount",
  componentId: "sc-14mtti6-4"
})(["color:", ";"], _Colors.default.graySemibold);

var StyledDropdown = (0, _styledComponents.default)(Dropdown).withConfig({
  displayName: "Dropdown__StyledDropdown",
  componentId: "sc-14mtti6-5"
})(["position:relative;display:inline-block;cursor:pointer;margin-left:-1px;"]);

var _default = (0, _reactRelay.createFragmentContainer)(StyledDropdown, {
  aggregation: function aggregation() {
    var node = require("../../__generated__/Dropdown_aggregation.graphql");

    if (node.hash && node.hash !== "94a2813381cb263e699c9a26e40fcece") {
      console.error("The definition of 'Dropdown_aggregation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Dropdown_aggregation.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Dropdown.js.map