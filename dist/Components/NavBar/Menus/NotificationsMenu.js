"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsQueryRenderer = exports.NotificationsMenu = exports.NotificationMenuItems = void 0;

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Artsy = require("../../../Artsy");

var _get = require("../../../Utils/get");

var _renderWithLoadProgress = require("../../../Artsy/Relay/renderWithLoadProgress");

var _palette = require("@artsy/palette");

var _SystemQueryRenderer = require("../../../Artsy/Relay/SystemQueryRenderer");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var NotificationMenuItems = function NotificationMenuItems(props) {
  var notifications = (0, _get.get)(props, function (p) {
    return p.me.followsAndSaves.notifications.edges;
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, notifications.map(function (_ref, index) {
    var node = _ref.node;
    var artists = node.artists,
        href = node.href,
        image = node.image,
        summary = node.summary;
    return _react.default.createElement(_palette.MenuItem, {
      href: href,
      key: index
    }, _react.default.createElement(_palette.Flex, {
      alignItems: "center"
    }, _react.default.createElement(_palette.Box, {
      width: 40,
      height: 40,
      bg: "black5",
      mr: 1
    }, _react.default.createElement(_palette.Image, {
      src: image.resized.url,
      width: 40,
      height: 40,
      style: {
        objectFit: "cover"
      }
    })), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Sans, {
      size: "2"
    }, summary), _react.default.createElement(_palette.Sans, {
      size: "2",
      weight: "medium"
    }, artists))));
  }), _react.default.createElement(_palette.Flex, {
    py: 1,
    flexDirection: "column",
    alignItems: "center"
  }, _react.default.createElement(_react.default.Fragment, null, notifications.length === 0 && _react.default.createElement(_palette.Flex, {
    width: "100%",
    flexDirection: "column"
  }, _react.default.createElement(_palette.Box, {
    pt: 1,
    pb: 3,
    width: "100%",
    textAlign: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: "3"
  }, "No new works"))), _react.default.createElement(_palette.Box, {
    width: "100%",
    px: 2
  }, _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_palette.Box, {
    pt: 2
  }, _react.default.createElement(_palette.Sans, {
    size: "2"
  }, _react.default.createElement(_palette.Link, {
    href: "/works-for-you"
  }, "View all"))))));
};
/**
 * The <Menu /> component renders a QueryRenderer inside of it, which fetches
 * individual MenuItems for display. During fetch there is a loading spinner.
 */


exports.NotificationMenuItems = NotificationMenuItems;

var NotificationsMenu = function NotificationsMenu() {
  return _react.default.createElement(_palette.Menu, {
    title: "Activity"
  }, _react.default.createElement(NotificationsQueryRenderer, {
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(NotificationMenuItems, {}, {}, {
      size: "small"
    })
  }));
};
/**
 * This QueryRenderer is also shared with NotificationBadge. Once the request
 * is performed the data is cached at the network layer so menu data appears
 * immediately and doesn't require a second request.
 */


exports.NotificationsMenu = NotificationsMenu;

var NotificationsQueryRenderer = function NotificationsQueryRenderer(_ref2) {
  var render = _ref2.render;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../__generated__/NotificationsMenuQuery.graphql");

      if (node.hash && node.hash !== "7d7328bde406bc85565f0fd69969f3ea") {
        console.error("The definition of 'NotificationsMenuQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../__generated__/NotificationsMenuQuery.graphql");
    }),
    variables: {},
    render: render
  });
};

exports.NotificationsQueryRenderer = NotificationsQueryRenderer;
//# sourceMappingURL=NotificationsMenu.js.map