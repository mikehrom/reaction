"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowIcon = exports.FollowIconContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _Icon = _interopRequireDefault(require("../Icon"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FollowIconContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "FollowIcon__FollowIconContainer",
  componentId: "sc-1tt2r9o-0"
})(["align-items:center;color:", ";cursor:pointer;"], (0, _palette.color)("black100"));
exports.FollowIconContainer = FollowIconContainer;
var Follow = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement(_palette.Serif, _extends({
    size: "2"
  }, props), "Follow");
}).withConfig({
  displayName: "FollowIcon__Follow",
  componentId: "sc-1tt2r9o-1"
})([""]);
var Unfollow = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement(_palette.Serif, _extends({
    size: "2"
  }, props), "Unfollow");
}).withConfig({
  displayName: "FollowIcon__Unfollow",
  componentId: "sc-1tt2r9o-2"
})([""]);
var Following = (0, _styledComponents.default)(function (props) {
  return _react.default.createElement(_palette.Serif, _extends({
    size: "2"
  }, props), "Following");
}).withConfig({
  displayName: "FollowIcon__Following",
  componentId: "sc-1tt2r9o-3"
})([""]);

var FollowingHover = _styledComponents.default.div.withConfig({
  displayName: "FollowIcon__FollowingHover",
  componentId: "sc-1tt2r9o-4"
})(["", "{display:none;}&:hover{color:", ";", "{display:none;}", "{display:block;}}"], Unfollow, (0, _palette.color)("red100"), Following, Unfollow);

var FollowHover = _styledComponents.default.div.withConfig({
  displayName: "FollowIcon__FollowHover",
  componentId: "sc-1tt2r9o-5"
})(["&:hover{color:", ";}"], (0, _palette.color)("purple100"));

var FollowIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowIcon, _React$Component);

  function FollowIcon() {
    _classCallCheck(this, FollowIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(FollowIcon).apply(this, arguments));
  }

  _createClass(FollowIcon, [{
    key: "render",
    value: function render() {
      var isFollowed = this.props.isFollowed;
      var iconName = isFollowed ? "follow-circle.is-following" : "follow-circle";
      return _react.default.createElement(FollowIconContainer, null, _react.default.createElement(_Icon.default, {
        name: iconName,
        style: {
          verticalAlign: "left",
          color: "inherit",
          margin: "0 0 0 -5px"
        }
      }), isFollowed ? _react.default.createElement(FollowingHover, null, _react.default.createElement(Following, null), _react.default.createElement(Unfollow, null)) : _react.default.createElement(FollowHover, null, _react.default.createElement(Follow, null)));
    }
  }]);

  return FollowIcon;
}(_react.default.Component); // Tests


exports.FollowIcon = FollowIcon;
Follow.displayName = "Follow";
Following.displayName = "Following";
Unfollow.displayName = "Unfollow";
//# sourceMappingURL=FollowIcon.js.map