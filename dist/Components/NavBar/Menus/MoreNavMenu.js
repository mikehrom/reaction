"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreNavMenu = void 0;

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _useTracking2 = require("../../../Artsy/Analytics/useTracking");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreNavMenu = function MoreNavMenu(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 160 : _ref$width;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var trackClick = function trackClick(event) {
    var link = event.target;
    var text = link.innerText;
    var href = link.parentNode.parentNode.getAttribute("href");
    trackEvent({
      action_type: _Artsy.AnalyticsSchema.ActionType.Click,
      context_module: _Artsy.AnalyticsSchema.ContextModule.HeaderMoreDropdown,
      subject: text,
      destination_path: href
    });
  };

  return _react.default.createElement(_palette.Menu, {
    onClick: trackClick,
    width: width
  }, _react.default.createElement(_palette.MenuItem, {
    href: "/galleries",
    display: ["block", "block", "none"]
  }, "Galleries"), _react.default.createElement(_palette.MenuItem, {
    href: "/fairs",
    display: ["block", "block", "block", "none"]
  }, "Fairs"), _react.default.createElement(_palette.MenuItem, {
    href: "/artists"
  }, "Artists"), _react.default.createElement(_palette.MenuItem, {
    href: "/shows"
  }, "Shows"), _react.default.createElement(_palette.MenuItem, {
    href: "/institutions"
  }, "Museums"), _react.default.createElement(_palette.MenuItem, {
    href: "https://partners.artsy.net"
  }, "Artsy for Galleries"));
};

exports.MoreNavMenu = MoreNavMenu;
//# sourceMappingURL=MoreNavMenu.js.map