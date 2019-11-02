"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowEntry = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIXME_DOMAIN = "https://www.artsy.net";

// FIXME: Check for null links
var ShowEntry = function ShowEntry(_ref) {
  var node = _ref.node,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "3" : _ref$size;
  return _react.default.createElement(_palette.Serif, {
    size: size,
    mb: 1
  }, _react.default.createElement(_palette.Serif, {
    size: size,
    display: "inline",
    italic: true
  }, node.href ? _react.default.createElement("a", {
    href: FIXME_DOMAIN + node.href,
    className: "noUnderline"
  }, node.name) : _react.default.createElement("span", null, node.name)), node.partner && ", ", " ", renderPartnerInfoSafely(node.partner), node.city && ", ".concat(node.city));
};

exports.ShowEntry = ShowEntry;

var renderPartnerInfoSafely = function renderPartnerInfoSafely(partner) {
  if (!partner) {
    return null;
  }

  if (partner.href) {
    return _react.default.createElement("a", {
      href: FIXME_DOMAIN + partner.href,
      className: "noUnderline"
    }, partner.name);
  }

  return _react.default.createElement("span", null, partner.name);
};
//# sourceMappingURL=ShowEntry.js.map