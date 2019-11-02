"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FallbackIcon = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconMapping = {
  Auction: _palette.AuctionIcon,
  Article: _palette.PublicationIcon,
  Artist: _palette.UserSingleIcon,
  City: _palette.MapPinIcon,
  Fair: _palette.FairIcon,
  Institution: _palette.InstitutionIcon,
  Page: _palette.PageIcon,
  Tag: _palette.TagIcon
};

var FallbackIcon = function FallbackIcon(_ref) {
  var entityType = _ref.entityType;
  var Icon = iconMapping[entityType] || _palette.NoImageIcon;
  return _react.default.createElement(Icon, {
    height: 28,
    width: 28,
    opacity: 0.4
  });
};

exports.FallbackIcon = FallbackIcon;
//# sourceMappingURL=FallbackIcon.js.map