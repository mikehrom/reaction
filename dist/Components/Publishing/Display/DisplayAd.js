"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayAd = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _DisplayTargeting = require("./DisplayTargeting");

var _react = _interopRequireWildcard(require("react"));

var _reactGpt = require("react-gpt");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_reactGpt.Bling.syncCorrelator(true);

var DisplayAd = function DisplayAd(props) {
  var adDimension = props.adDimension,
      adUnit = props.adUnit,
      targetingData = props.targetingData,
      otherProps = _objectWithoutProperties(props, ["adDimension", "adUnit", "targetingData"]);

  var _adDimension$split$ma = adDimension.split("x").map(function (a) {
    return parseInt(a);
  }),
      _adDimension$split$ma2 = _slicedToArray(_adDimension$split$ma, 2),
      width = _adDimension$split$ma2[0],
      height = _adDimension$split$ma2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      isAdEmpty = _useState2[0],
      setAdEmpty = _useState2[1];

  var isMobileLeaderboardAd = (0, _DisplayTargeting.is300x50AdUnit)(adDimension);

  var ad = _react.default.createElement(_reactGpt.Bling, {
    collapseEmptyDiv: true,
    adUnitPath: "/21805539690/".concat(adUnit),
    targeting: targetingData,
    slotSize: [width, height],
    onSlotRenderEnded: function onSlotRenderEnded(event) {
      setAdEmpty(event.isEmpty);
    }
  });

  if (isAdEmpty) {
    return null;
  }

  return _react.default.createElement(DisplayAdContainer, _extends({
    flexDirection: "column",
    pt: isMobileLeaderboardAd ? 2 : 4,
    pb: isMobileLeaderboardAd ? 2 : 1,
    height: isAdEmpty || isAdEmpty === null ? "1px" // on initial render OR when no ad content returned from Google, set 1px height to ad container to prevent jarring UX effect
    : isMobileLeaderboardAd ? "100px" // on mobile 300x50 ads reduce ad container height to 100px
    : "334px",
    isAdEmpty: isAdEmpty
  }, otherProps), _react.default.createElement(_palette.Box, {
    m: "auto"
  }, ad, _react.default.createElement(_palette.Sans, {
    size: "1",
    color: "black30",
    m: 1
  }, "Advertisement")));
};

exports.DisplayAd = DisplayAd;
var DisplayAdContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "DisplayAd__DisplayAdContainer",
  componentId: "sc-10le8e3-0"
})(["margin:", ";border-top:", ";background:", ";text-align:center;width:100%;visibility:", ";"], function (p) {
  return p.isStandard ? "0" : "0 auto";
}, function (p) {
  return p.isSeries ? "1px solid ".concat((0, _palette.color)("black10")) : "none";
}, function (p) {
  return p.isSeries ? (0, _palette.color)("black100") : (0, _palette.color)("black5");
}, function (p) {
  return p.isAdEmpty || p.isAdEmpty === null ? "hidden" : "visible";
});
//# sourceMappingURL=DisplayAd.js.map