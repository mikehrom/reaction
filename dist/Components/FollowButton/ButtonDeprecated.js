"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowButtonDeprecated = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Fonts = require("../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  ", ";\n  width: 80px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ", "\n  cursor: pointer;\n  &:hover {\n    ", "\n    background: ", "\n    color: ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FollowButtonDeprecated =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowButtonDeprecated, _React$Component);

  function FollowButtonDeprecated() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowButtonDeprecated);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowButtonDeprecated)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showUnfollow: false
    });

    return _this;
  }

  _createClass(FollowButtonDeprecated, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var showUnfollow = this.state.showUnfollow;
      var _this$props = this.props,
          handleFollow = _this$props.handleFollow,
          isFollowed = _this$props.isFollowed;
      var text = isFollowed ? showUnfollow ? "Unfollow" : "Following" : "Follow";
      return _react.default.createElement(FollowButtonContainer, {
        isFollowed: isFollowed,
        onClick: handleFollow,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            showUnfollow: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            showUnfollow: false
          });
        }
      }, text);
    }
  }]);

  return FollowButtonDeprecated;
}(_react.default.Component);

exports.FollowButtonDeprecated = FollowButtonDeprecated;

_defineProperty(FollowButtonDeprecated, "defaultProps", {
  isFollowed: false
});

var Div = _styledComponents.default.div;
var FollowButtonContainer = Div(_templateObject(), _Colors.default.grayRegular, (0, _Fonts.unica)("s12", "medium"), function (props) {
  return props.isFollowed ? _Colors.default.grayMedium : "black";
}, function (props) {
  return !props.isFollowed && "\n      border-color: black;";
}, function (props) {
  return props.isFollowed ? "white" : "black";
}, function (props) {
  return props.isFollowed ? _Colors.default.redMedium : "white";
});
//# sourceMappingURL=ButtonDeprecated.js.map