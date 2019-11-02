"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSummaryItemFragmentContainer = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../Utils/get");

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ArtworkSummaryItem = function ArtworkSummaryItem(_ref) {
  var _ref$order = _ref.order,
      lineItems = _ref$order.lineItems,
      name = _ref$order.sellerDetails.name,
      others = _objectWithoutProperties(_ref, ["order"]);

  var artwork = (0, _get.get)({}, function (props) {
    return lineItems.edges[0].node.artwork;
  });
  var artist_names = artwork.artist_names,
      title = artwork.title,
      date = artwork.date,
      shippingOrigin = artwork.shippingOrigin,
      imageURL = artwork.image.resized_ArtworkSummaryItem.url;
  var truncateTextStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };
  return _react.default.createElement(_palette.StackableBorderBox, _extends({
    flexDirection: "row"
  }, others), _react.default.createElement(_palette.Box, {
    height: "auto"
  }, _react.default.createElement(_palette.Image, {
    src: imageURL,
    width: "55px",
    mr: 1
  })), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    style: {
      overflow: "hidden"
    }
  }, _react.default.createElement(_palette.Serif, {
    size: "2",
    weight: "semibold",
    color: "black60",
    style: truncateTextStyle
  }, artist_names), _react.default.createElement("div", {
    style: _objectSpread({
      lineHeight: "1"
    }, truncateTextStyle)
  }, _react.default.createElement(_palette.Serif, {
    italic: true,
    size: "2",
    color: "black60",
    display: "inline"
  }, title), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60",
    display: "inline"
  }, date && ", ".concat(date))), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60",
    style: truncateTextStyle
  }, name), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, shippingOrigin)));
};

var ArtworkSummaryItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSummaryItem, {
  order: function order() {
    var node = require("../../../__generated__/ArtworkSummaryItem_order.graphql");

    if (node.hash && node.hash !== "9365a78287c9fd680d1a724ad3c1fa49") {
      console.error("The definition of 'ArtworkSummaryItem_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtworkSummaryItem_order.graphql");
  }
});
exports.ArtworkSummaryItemFragmentContainer = ArtworkSummaryItemFragmentContainer;
//# sourceMappingURL=ArtworkSummaryItem.js.map