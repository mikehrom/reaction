"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistShowBlockItem = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtistShowBlockItem = function ArtistShowBlockItem(props) {
  var pr = props.pr,
      pb = props.pb,
      href = props.href,
      city = props.city,
      imageUrl = props.imageUrl,
      exhibitionInfo = props.exhibitionInfo;
  return _react.default.createElement(_palette.Box, {
    width: props.blockWidth,
    height: "auto",
    pr: pr,
    pb: pb
  }, _react.default.createElement("a", {
    href: _sharify.data.APP_URL + href,
    className: "noUnderline"
  }, _react.default.createElement(_palette.Image, {
    width: "100%",
    src: imageUrl
  }), _react.default.createElement(_palette.Spacer, {
    my: 1
  }), _react.default.createElement(_palette.Serif, {
    size: "3"
  }, props.name)), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, _react.default.createElement("a", {
    href: _sharify.data.APP_URL + href,
    className: "noUnderline"
  }, props.partner)), _react.default.createElement(_palette.Serif, {
    size: "1",
    color: "black60"
  }, city && "".concat(city, ", "), exhibitionInfo));
};

exports.ArtistShowBlockItem = ArtistShowBlockItem;
//# sourceMappingURL=ArtistShowBlockItem.js.map