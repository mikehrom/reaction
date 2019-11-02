"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabCarousel = exports.RouteTab = exports.RouteTabs = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _palette = require("@artsy/palette");

var _ = require("./");

var _found = require("found");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RouteTabs = (0, _styledComponents.default)(_palette.TabsContainer).withConfig({
  displayName: "RouteTabs",
  componentId: "h84f08-0"
})(["width:100%;a{", ";:not(:last-child){margin-right:", "px;}color:", ";text-decoration:none;&.active{color:", ";", ";}}"], _palette.sharedTabsStyles.tabContainer, (0, _palette.space)(3), (0, _palette.color)("black60"), (0, _palette.color)("black100"), _palette.sharedTabsStyles.activeTabContainer);
exports.RouteTabs = RouteTabs;

var RouteTab = function RouteTab(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_found.Link, _extends({}, props, {
    activeClassName: "active"
  }), _react.default.createElement(_palette.Sans, {
    size: "3t",
    weight: "medium"
  }, children));
};

exports.RouteTab = RouteTab;

var TabCarousel = function TabCarousel(_ref2) {
  var tabs = _ref2.tabs;
  return _react.default.createElement(_palette.Box, {
    width: "100%"
  }, _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(RouteTabs, null, _react.default.createElement(_.Carousel, {
    renderLeftArrow: function renderLeftArrow(_ref3) {
      var Arrow = _ref3.Arrow;
      return _react.default.createElement(TabArrowWrapper, {
        left: 0
      }, _react.default.createElement(Arrow, null));
    },
    renderRightArrow: function renderRightArrow(_ref4) {
      var Arrow = _ref4.Arrow;
      return _react.default.createElement(TabArrowWrapper, {
        right: 0
      }, _react.default.createElement(Arrow, null));
    },
    options: {
      wrapAround: false,
      pageDots: false,
      cellAlign: "left",
      contain: true,
      draggable: false,
      groupCells: true
    },
    height: "34px",
    arrowPosition: 0,
    data: tabs,
    showArrows: true,
    render: function render(tab) {
      return tab;
    }
  }))), _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(RouteTabs, null, _react.default.createElement(_palette.Flex, {
    pr: 2
  }, tabs))));
};

exports.TabCarousel = TabCarousel;
RouteTabs.displayName = "RouteTabs";
RouteTab.displayName = "RouteTab";

var TabArrowWrapper = _styledComponents.default.div.withConfig({
  displayName: "RouteTabs__TabArrowWrapper",
  componentId: "h84f08-1"
})(["height:34px;width:30px;top:-7px;z-index:10;position:absolute;", ";", ";", "{height:34px;background-color:", ";opacity:1;box-shadow:0 -9px 0 0 #fff,12px 0 15px -4px #fff,-12px 0 15px -4px #fff;> svg{height:18px;}}"], _styledSystem.right, _styledSystem.left, _.ArrowButton, (0, _palette.color)("white100"));
//# sourceMappingURL=RouteTabs.js.map