"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistShowListItem = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _Responsive = require("../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIXME_DOMAIN = "https://www.artsy.net";

var ArtistShowListItem = function ArtistShowListItem(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(SmallShowListItem, props)), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(LargeShowListItem, props)));
};

exports.ArtistShowListItem = ArtistShowListItem;

var LargeShowListItem = function LargeShowListItem(props) {
  var name = props.name,
      city = props.city,
      exhibitionInfo = props.exhibitionInfo,
      href = props.href,
      partner = props.partner;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Separator, {
    mb: 4
  }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
    sm: 3
  }, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, city && "".concat(city, ", "), exhibitionInfo)), _react.default.createElement(_palette.Col, {
    sm: 6
  }, _react.default.createElement(_palette.Serif, {
    size: "4"
  }, _react.default.createElement("a", {
    href: FIXME_DOMAIN + href,
    className: "noUnderline"
  }, name)), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, _react.default.createElement("a", {
    href: FIXME_DOMAIN + href,
    className: "noUnderline"
  }, partner))), _react.default.createElement(_palette.Col, {
    sm: 3
  }, _react.default.createElement(_palette.Serif, {
    size: "2"
  }, city))), _react.default.createElement(_palette.Spacer, {
    mb: 4
  }));
};

var SmallShowListItem = function SmallShowListItem(props) {
  var name = props.name,
      city = props.city,
      exhibitionInfo = props.exhibitionInfo,
      href = props.href,
      partner = props.partner;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Separator, {
    mb: 3
  }), _react.default.createElement(_palette.Serif, {
    size: "3"
  }, _react.default.createElement("a", {
    href: FIXME_DOMAIN + href,
    className: "noUnderline"
  }, name)), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, _react.default.createElement("a", {
    href: FIXME_DOMAIN + props.href,
    className: "noUnderline"
  }, partner)), _react.default.createElement(_palette.Serif, {
    size: "1",
    color: "black60"
  }, city && "".concat(city, ", "), exhibitionInfo), _react.default.createElement(_palette.Spacer, {
    mb: 3
  }));
};
//# sourceMappingURL=ArtistShowListItem.js.map