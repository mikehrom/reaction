"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsBadge = void 0;

require("core-js/modules/es6.number.constructor");

var _palette = require("@artsy/palette");

var _Artsy = require("../../Artsy");

var _useTracking2 = require("../../Artsy/Analytics/useTracking");

var _cookiesJs = _interopRequireDefault(require("cookies-js"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../Utils/get");

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _Menus = require("./Menus");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger.default)("Components/NavBar");

var NotificationsBadge = function NotificationsBadge(_ref) {
  var hover = _ref.hover;
  var isClient = typeof window !== "undefined";
  return isClient ? _react.default.createElement(_Menus.NotificationsQueryRenderer, {
    render: function render(_ref2) {
      var error = _ref2.error,
          props = _ref2.props;

      // If there's an error hide the badge
      if (error) {
        logger.error(error);
        return null;
      } // Fetching. If there's a notification count stored in a cookie, display it


      if (!props) {
        return _react.default.createElement(CircularCount, null);
      } // Get the unread notification count from the server


      var totalUnread = (0, _get.get)(props, function (p) {
        return p.me.followsAndSaves.notifications.edges.length;
      }, 0);
      var count = totalUnread; // User has no notifications; clear the cookie

      if (count === 0) {
        _cookiesJs.default.expire("notification-count");

        return null;
      } // Update the notification bad with the count, and store it in a cookie
      // so that subsequent page views don't need a fetch in order to render
      // the badge.


      if (count > 0) {
        var cachedNotificationCount = Number(_cookiesJs.default.get("notification-count"));

        if (count !== cachedNotificationCount) {
          if (count >= 100) {
            count = "99+";
          } // In force, when a request is made to `/notifications` endpoint,
          // sd.NOTIFICATIONS_COUNT is populated by this cookie.


          _cookiesJs.default.set("notification-count", count);
        }
      }

      return _react.default.createElement(_palette.Box, null, _react.default.createElement(CircularCount, {
        count: count,
        rawCount: totalUnread,
        hover: hover
      }));
    }
  }) : _react.default.createElement(CircularCount, null);
};

exports.NotificationsBadge = NotificationsBadge;

var CircularCount = function CircularCount(_ref3) {
  var count = _ref3.count,
      rawCount = _ref3.rawCount,
      hover = _ref3.hover;

  // Check to see if we've got a value from sharify, populated by a cookie on
  // the server.
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      notificationCount = _useContext.notificationCount;

  var notificationsLabel = count || notificationCount;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  if (!notificationsLabel) {
    return null;
  }

  (0, _react.useEffect)(function () {
    if (hover) {
      trackEvent({
        action_type: _Artsy.AnalyticsSchema.ActionType.Hover,
        subject: _Artsy.AnalyticsSchema.Subject.NotificationBell,
        new_notification_count: rawCount
      });
    }
  }, [hover]);
  return _react.default.createElement(Container, null, _react.default.createElement(_palette.Sans, {
    size: "1",
    weight: "medium",
    color: "white100"
  }, notificationsLabel));
};

var Container = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "NotificationsBadge__Container",
  componentId: "xc5q7t-0"
})(["background-color:", ";border-radius:50%;width:20px;height:20px;align-items:center;justify-content:center;position:absolute;top:12px;right:0;"], (0, _palette.color)("purple100"));
//# sourceMappingURL=NotificationsBadge.js.map