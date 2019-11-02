"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeaturedArtists = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FeaturedArtists = function FeaturedArtists(props) {
  var featuredArtists = props.featuredArtists,
      breakpointSize = props.breakpointSize,
      hasMultipleArtists = props.hasMultipleArtists;
  var artistCount = getArtistCountAtBreakpoint(breakpointSize);
  var remainingCount = featuredArtists.length - artistCount;
  var truncatedArtists = featuredArtists.slice(0, artistCount);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAll = _useState2[0],
      setShowMore = _useState2[1];

  var headlineLabel = "Featured Artist" + (hasMultipleArtists ? "s" : "");
  return _react.default.createElement(_palette.Box, {
    pb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium",
    pb: 15
  }, headlineLabel), _react.default.createElement(_palette.Flex, {
    flexWrap: "wrap"
  }, showAll || featuredArtists.length <= artistCount ? featuredArtists : _react.default.createElement(_react.default.Fragment, null, truncatedArtists, _react.default.createElement(_palette.Box, {
    width: ["100%", "33%", "33%", "25%"],
    pb: 20,
    key: "view-more",
    onClick: function onClick() {
      setShowMore(true);
    }
  }, _react.default.createElement(ViewMore, {
    size: "3"
  }, _react.default.createElement(_palette.EntityHeader, {
    initials: "+ ".concat(remainingCount),
    name: "View more"
  }))))));
};

exports.FeaturedArtists = FeaturedArtists;
var ViewMore = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "FeaturedArtists__ViewMore",
  componentId: "sc-1jjf8mr-0"
})(["div{div{text-decoration:underline;cursor:pointer;}div:first-child{text-decoration:none;}}"]);
ViewMore.displayName = "ViewMore";

var getArtistCountAtBreakpoint = function getArtistCountAtBreakpoint(breakpointSize) {
  switch (breakpointSize) {
    case "xs":
    case "sm":
      return 3;

    case "md":
      return 5;

    case "lg":
    case "xl":
      return 7;

    default:
      return 3;
  }
};
//# sourceMappingURL=FeaturedArtists.js.map