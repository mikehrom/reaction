"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceWithCacheBuster = exports.PixelTracker = void 0;

require("core-js/modules/es6.regexp.replace");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PixelTracker = function PixelTracker(props) {
  var unit = props.unit,
      date = props.date;
  var url = unit.pixel_tracking_code;

  if (!url) {
    return null;
  }

  return _react.default.createElement(TrackerImage, {
    width: 1,
    height: 1,
    src: replaceWithCacheBuster(url, date)
  });
};

exports.PixelTracker = PixelTracker;

var TrackerImage = _styledComponents.default.img.withConfig({
  displayName: "ExternalTrackers__TrackerImage",
  componentId: "cu2342-0"
})(["display:none;"]);

var replaceWithCacheBuster = function replaceWithCacheBuster(url, date) {
  return url.replace("[timestamp]", date);
};

exports.replaceWithCacheBuster = replaceWithCacheBuster;
//# sourceMappingURL=ExternalTrackers.js.map