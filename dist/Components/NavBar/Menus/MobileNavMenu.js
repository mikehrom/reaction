"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileToggleIcon = exports.MobileNavMenu = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _useTracking2 = require("../../../Artsy/Analytics/useTracking");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MobileNavMenu = function MobileNavMenu() {
  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      user = _useContext.user;

  var isLoggedIn = Boolean(user);

  var trackClick = function trackClick(event) {
    var link = event.target;
    var text = link.innerText;
    var href = link.parentNode.getAttribute("href");
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      subject: text,
      destination_path: href
    });
  };

  return _react.default.createElement(MobileNavContainer, {
    py: [1, 4],
    flexDirection: "column",
    onClick: trackClick
  }, _react.default.createElement(MobileLink, {
    href: "/"
  }, "Home"), _react.default.createElement(MobileLink, {
    href: "/artists"
  }, "Artists"), _react.default.createElement(MobileLink, {
    href: "/shows"
  }, "Shows"), _react.default.createElement(MobileLink, {
    href: "/galleries"
  }, "Galleries"), _react.default.createElement(MobileLink, {
    href: "/institutions"
  }, "Museums"), _react.default.createElement(MobileLink, {
    href: "/fairs"
  }, "Fairs"), _react.default.createElement(MobileLink, {
    href: "/auctions"
  }, "Auctions"), _react.default.createElement(MobileLink, {
    href: "/articles"
  }, "Editorial"), _react.default.createElement(_palette.Box, {
    px: 2
  }, _react.default.createElement(_palette.Separator, {
    my: [1, 4]
  })), isLoggedIn ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(MobileLink, {
    href: "/works-for-you"
  }, "Works for you"), _react.default.createElement(MobileLink, {
    href: "/user/edit"
  }, "Account")) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(MobileLink, {
    href: "/log_in?intent=signup&signupIntent=signup&trigger=click&contextModule=Header"
  }, "Login"), _react.default.createElement(MobileLink, {
    href: "/sign_up?intent=signup&signupIntent=signup&trigger=click&contextModule=Header"
  }, "Sign up")));
};

exports.MobileNavMenu = MobileNavMenu;

var MobileLink = function MobileLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["href", "children"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPressed = _useState2[0],
      setPressed = _useState2[1];

  var bg = isPressed ? "black5" : "white100";
  return _react.default.createElement(MobileLinkContainer, _extends({
    py: 0.5,
    style: {
      cursor: "pointer"
    },
    bg: bg,
    onTouchStart: function onTouchStart() {
      return setPressed(true);
    },
    onTouchEnd: function onTouchEnd() {
      return setPressed(false);
    }
  }, props), _react.default.createElement(_palette.Box, {
    px: 2,
    py: [0, 0.5]
  }, href ? _react.default.createElement(_palette.Link, {
    href: href,
    underlineBehavior: "none"
  }, _react.default.createElement(_palette.Serif, {
    size: ["4", "8"]
  }, children)) : _react.default.createElement(_palette.Serif, {
    size: ["4", "8"]
  }, children)));
};

var MobileNavContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "MobileNavMenu__MobileNavContainer",
  componentId: "sc-1g6shmo-0"
})(["background-color:white;border-bottom:1px solid ", ";position:relative;user-select:none;overflow-y:scroll;z-index:2;width:100%;height:calc(100vh - ", "px);-webkit-overflow-scrolling:touch;"], (0, _palette.color)("black10"), (0, _palette.space)(6));
var MobileLinkContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "MobileNavMenu__MobileLinkContainer",
  componentId: "sc-1g6shmo-1"
})(["background-color:white;transition:0.3s linear;cursor:pointer;&:hover{background-color:", ";}"], function (p) {
  return p.disableHover ? "transparent" : (0, _palette.color)("black5");
});

var MobileToggleIcon = function MobileToggleIcon(_ref2) {
  var open = _ref2.open;
  var style = {
    transform: "scale(1.5)",
    top: 2
  };
  return open ? _react.default.createElement(_palette.CloseIcon, {
    style: style
  }) : _react.default.createElement(_palette.MenuIcon, {
    style: style
  });
};

exports.MobileToggleIcon = MobileToggleIcon;
//# sourceMappingURL=MobileNavMenu.js.map