"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _palette = require("@artsy/palette");

var _Artsy = require("../../Artsy");

var _useTracking2 = require("../../Artsy/Analytics/useTracking");

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NavBar = require("./NavBar");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavItem = function NavItem(_ref) {
  var Menu = _ref.Menu,
      Overlay = _ref.Overlay,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      children = _ref.children,
      className = _ref.className,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? "block" : _ref$display,
      href = _ref.href,
      onClick = _ref.onClick;
  var navItemLabel = children;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var _useState = (0, _react.useState)(active),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      toggleHover = _useState2[1];

  var showMenu = Boolean(Menu && hover);
  var showOverlay = Boolean(Overlay);
  var hoverColor = hover ? "purple100" : "black80";

  var getAnimation = function getAnimation(h) {
    return {
      opacity: h ? 0 : 1,
      transform: "translate3d(0, ".concat(h ? -90 : -65, "px, 0)")
    };
  };

  var animatedStyle = (0, _reactSpring.useSpring)(_objectSpread({
    from: getAnimation(hover)
  }, getAnimation(!hover), {
    config: function config(name) {
      return name === "opacity" ? _reactSpring.config.stiff : {
        friction: 10,
        mass: 0.1
      };
    }
  }));

  var trackClick = function trackClick() {
    if (href && (0, _isString2.default)(navItemLabel)) {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Click,
        subject: navItemLabel,
        // Text passed into the NavItem
        destination_path: href
      });
    }
  };

  var trackHover = function trackHover() {
    if ((0, _isString2.default)(navItemLabel)) trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Hover,
      subject: navItemLabel
    });
  };

  (0, _react.useEffect)(function () {
    if (hover) {
      trackHover();
    }
  }, [hover]);
  return _react.default.createElement(_palette.Box, {
    position: "relative",
    onMouseEnter: function onMouseEnter() {
      return toggleHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return toggleHover(false);
    }
  }, _react.default.createElement(_palette.Link, {
    href: href,
    color: hoverColor,
    underlineBehavior: "none",
    px: 1,
    py: 2,
    className: className,
    display: display,
    position: "relative",
    style: {
      cursor: "pointer"
    },
    onClick: function (_onClick) {
      function onClick() {
        return _onClick.apply(this, arguments);
      }

      onClick.toString = function () {
        return _onClick.toString();
      };

      return onClick;
    }(function () {
      trackClick();
      onClick && onClick();
    })
  }, _react.default.createElement(_palette.Sans, {
    size: "3",
    weight: "medium",
    color: hoverColor
  }, _react.default.createElement(_palette.Box, {
    height: 25
  }, (0, _isFunction2.default)(navItemLabel) ? // NavItem children can be called as renderProps so that contents
  // can operate on UI behaviors (such as changing the color of an
  // icon on hover).
  navItemLabel({
    hover: hover
  }) : navItemLabel))), showMenu && _react.default.createElement(_reactSpring.animated.div, {
    style: animatedStyle
  }, _react.default.createElement(MenuContainer, {
    top: (0, _palette.space)(6)
  }, _react.default.createElement(Menu, null))), showOverlay && _react.default.createElement(Overlay, {
    hover: hover
  }));
};

exports.NavItem = NavItem;
var MenuContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "NavItem__MenuContainer",
  componentId: "sc-1ekz3i7-0"
})(["position:absolute;top:", "px;margin-top:-1px;transform:translateX(-78%);"], _NavBar.NavBarHeight);
//# sourceMappingURL=NavItem.js.map