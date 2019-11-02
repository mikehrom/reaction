"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarHeight = exports.NavBar = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _cookiesJs = _interopRequireDefault(require("cookies-js"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _palette = require("@artsy/palette");

var _SystemContext = require("../../Artsy/SystemContext");

var _SearchBar = require("../Search/SearchBar");

var _Menus = require("./Menus");

var _NavItem = require("./NavItem");

var _NotificationsBadge = require("./NotificationsBadge");

var authentication = _interopRequireWildcard(require("./Utils/authentication"));

var _Artsy = require("../../Artsy");

var _Analytics = require("../../Artsy/Analytics");

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _useMedia2 = require("../../Utils/Hooks/useMedia");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavBar = (0, _Analytics.track)({
  flow: _Artsy.AnalyticsSchema.Flow.Header,
  context_module: _Artsy.AnalyticsSchema.ContextModule.Header
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
})(function (_props) {
  var _useTracking = (0, _Analytics.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var _useContext = (0, _react.useContext)(_SystemContext.SystemContext),
      mediator = _useContext.mediator,
      user = _useContext.user;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMobileMenu = _useState2[0],
      toggleMobileNav = _useState2[1];

  var _useMedia = (0, _useMedia2.useMedia)(),
      xs = _useMedia.xs,
      sm = _useMedia.sm;

  var isMobile = xs || sm;
  var isLoggedIn = Boolean(user);

  var getNotificationCount = function getNotificationCount() {
    return _cookiesJs.default.get("notification-count") || 0;
  }; // Close mobile menu if dragging window from small size to desktop


  (0, _react.useEffect)(function () {
    if (!isMobile) {
      toggleMobileNav(false);
    }
  }, [isMobile]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NavBarContainer, {
    px: 1
  }, _react.default.createElement(NavSection, null, _react.default.createElement(_palette.Link, {
    href: "/",
    style: {
      display: "flex"
    }
  }, _react.default.createElement(_palette.ArtsyMarkIcon, {
    height: 40,
    width: 40
  }))), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(NavSection, {
    width: "100%"
  }, _react.default.createElement(_palette.Box, {
    width: "100%"
  }, _react.default.createElement(_SearchBar.SearchBarQueryRenderer, null))), _react.default.createElement(_palette.Spacer, {
    mr: 3
  }), _react.default.createElement(NavSection, {
    display: ["none", "none", "flex"]
  }, _react.default.createElement(NavSection, null, _react.default.createElement(_NavItem.NavItem, {
    href: "/collect"
  }, "Artworks"), _react.default.createElement(_NavItem.NavItem, {
    href: "/auctions"
  }, "Auctions"), _react.default.createElement(_NavItem.NavItem, {
    href: "/galleries"
  }, "Galleries"), _react.default.createElement(_NavItem.NavItem, {
    href: "/art-fairs",
    display: ["none", "none", "none", "none", "block"]
  }, "Fairs"), _react.default.createElement(_NavItem.NavItem, {
    href: "/articles"
  }, "Editorial"), _react.default.createElement(_NavItem.NavItem, {
    Menu: function Menu() {
      return _react.default.createElement(_palette.Box, {
        mr: -150
      }, _react.default.createElement(_Menus.MoreNavMenu, {
        width: 160
      }));
    }
  }, "More")), _react.default.createElement(_palette.Spacer, {
    mr: 2
  }), _react.default.createElement(NavSection, null, isLoggedIn && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_NavItem.NavItem, {
    href: "/works-for-you",
    Menu: _Menus.NotificationsMenu,
    Overlay: _NotificationsBadge.NotificationsBadge,
    onClick: function onClick() {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Click,
        subject: _Artsy.AnalyticsSchema.Subject.NotificationBell,
        new_notification_count: getNotificationCount(),
        destination_path: "/works-for-you"
      });
    }
  }, function (_ref) {
    var hover = _ref.hover;

    if (hover) {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Hover,
        subject: _Artsy.AnalyticsSchema.Subject.NotificationBell,
        new_notification_count: getNotificationCount()
      });
    }

    return _react.default.createElement(_palette.BellIcon, {
      top: 3,
      fill: hover ? "purple100" : "black80"
    });
  }), _react.default.createElement(_NavItem.NavItem, {
    Menu: _Menus.UserMenu
  }, function (_ref2) {
    var hover = _ref2.hover;

    if (hover) {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Hover,
        subject: "User"
      });
    }

    return _react.default.createElement(_palette.SoloIcon, {
      top: 3,
      fill: hover ? "purple100" : "black80"
    });
  }))), !isLoggedIn && _react.default.createElement(NavSection, null, _react.default.createElement(_palette.Button, {
    variant: "secondaryOutline",
    onClick: function onClick() {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Click,
        subject: _Artsy.AnalyticsSchema.Subject.Login
      });
      authentication.login(mediator);
    }
  }, "Log in"), _react.default.createElement(_palette.Spacer, {
    mr: 1
  }), _react.default.createElement(_palette.Button, {
    onClick: function onClick() {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Click,
        subject: _Artsy.AnalyticsSchema.Subject.Signup
      });
      authentication.signup(mediator);
    }
  }, "Sign up"))), _react.default.createElement(NavSection, {
    display: ["flex", "flex", "none"]
  }, _react.default.createElement(_NavItem.NavItem, {
    className: "mobileHamburgerButton",
    onClick: function onClick() {
      var showMenu = !showMobileMenu;

      if (showMenu) {
        trackEvent({
          action_type: _Artsy.AnalyticsSchema.ActionType.Click,
          subject: _Artsy.AnalyticsSchema.Subject.SmallScreenMenuSandwichIcon
        });
      }

      toggleMobileNav(showMenu);
    }
  }, _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22
  }, _react.default.createElement(MobileNavDivider, null), _react.default.createElement(_Menus.MobileToggleIcon, {
    open: showMobileMenu
  }))))), showMobileMenu && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(MobileNavCover, {
    onClick: function onClick() {
      return toggleMobileNav(false);
    }
  }), _react.default.createElement(_Menus.MobileNavMenu, null)));
});
exports.NavBar = NavBar;
var NavBarHeight = (0, _palette.space)(6) - 1; // border offset

exports.NavBarHeight = NavBarHeight;

var NavSection = function NavSection(_ref3) {
  var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement(_palette.Flex, _extends({
    alignItems: "center"
  }, props), children);
};

var NavBarContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "NavBar__NavBarContainer",
  componentId: "sc-1f2dwyb-0"
})(["background-color:", ";border-bottom:1px solid ", ";position:relative;z-index:3;height:", "px;"], (0, _palette.color)("white100"), (0, _palette.color)("black10"), NavBarHeight); // FIXME: This needs to be cleaned up once we get proper icons

var MobileNavDivider = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "NavBar__MobileNavDivider",
  componentId: "sc-1f2dwyb-1"
})(["border-left:1px solid ", ";height:63px;position:absolute;left:-12px;"], (0, _palette.color)("black10"));

var MobileNavCover = _styledComponents.default.div.withConfig({
  displayName: "NavBar__MobileNavCover",
  componentId: "sc-1f2dwyb-2"
})(["position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(194,194,194,0.3);z-index:0;"]);
//# sourceMappingURL=NavBar.js.map