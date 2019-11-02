"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoColumnLayout = exports.TwoColumnSplit = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _Responsive = require("../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CONTENT_SPAN = 7;
var SIDEBAR_SPAN = 4;
var ROW_SPACE = 2;
var COL_SPACE = 2;

var columnRatioWidth = function columnRatioWidth(spans, size) {
  return Math.round(spans / size * 100) + "%";
};

var TwoColumnSplit = function TwoColumnSplit(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _React$Children$toArr = _react.default.Children.toArray(children),
      _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
      firstColumn = _React$Children$toArr2[0],
      secondColumn = _React$Children$toArr2[1];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(_palette.Flex, _extends({
    flexDirection: "column"
  }, props), _react.default.createElement(_palette.Box, {
    width: "100%"
  }, firstColumn), _react.default.createElement(_palette.Spacer, {
    mr: null,
    mb: ROW_SPACE
  }), _react.default.createElement(_palette.Box, {
    width: "100%"
  }, secondColumn))), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(_palette.Flex, _extends({
    flexDirection: "row"
  }, props), _react.default.createElement(_palette.Box, {
    width: columnRatioWidth(4, CONTENT_SPAN)
  }, firstColumn), _react.default.createElement(_palette.Spacer, {
    mr: COL_SPACE,
    mb: null
  }), _react.default.createElement(_palette.Box, {
    width: columnRatioWidth(3, CONTENT_SPAN)
  }, secondColumn))));
};

exports.TwoColumnSplit = TwoColumnSplit;

var TwoColumnLayout = function TwoColumnLayout(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(XsLayout, props)), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(DefaultLayout, props)));
};

exports.TwoColumnLayout = TwoColumnLayout;

var DefaultLayout = function DefaultLayout(_ref2) {
  var Content = _ref2.Content,
      Sidebar = _ref2.Sidebar;
  return _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
    col: CONTENT_SPAN
  }, Content), _react.default.createElement(_palette.Col, {
    col: 1
  }), _react.default.createElement(_palette.Col, {
    col: SIDEBAR_SPAN
  }, Sidebar));
};

var XsLayout = function XsLayout(_ref3) {
  var Content = _ref3.Content,
      Sidebar = _ref3.Sidebar;
  return _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, Content), _react.default.createElement(_palette.Col, null, Sidebar));
};
//# sourceMappingURL=TwoColumnLayout.js.map