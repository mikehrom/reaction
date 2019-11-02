"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallBanner = exports.LargeBanner = exports.Banner = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Truncator = require("../../../../Components/Truncator");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLink = (0, _styledComponents.default)(_palette.Link).withConfig({
  displayName: "Banner__StyledLink",
  componentId: "yn94q8-0"
})(["&:hover{text-decoration:none;}"]);

var withLink = function withLink(href, children) {
  if (href) {
    return _react.default.createElement(StyledLink, {
      noUnderline: true,
      href: _sharify.data.APP_URL + href
    }, children);
  }

  return children;
};

var Banner = function Banner(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, withLink(props.href, _react.default.createElement(SmallBanner, props))), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, withLink(props.href, _react.default.createElement(LargeBanner, props))));
};

exports.Banner = Banner;

var LargeBanner = function LargeBanner(props) {
  return _react.default.createElement(_palette.Flex, {
    flexDirection: "row",
    mt: 2
  }, _react.default.createElement(_palette.Avatar, {
    size: "sm",
    src: props.imageUrl,
    initials: props.initials
  }), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    justifyContent: "center",
    ml: 2
  }, _react.default.createElement(_palette.Sans, {
    weight: "medium",
    size: "2"
  }, props.meta), _react.default.createElement(_palette.Serif, {
    size: "4t"
  }, props.name), _react.default.createElement(_palette.Serif, {
    size: "4t",
    color: "black60"
  }, props.subHeadline)));
};

exports.LargeBanner = LargeBanner;

var SmallBanner = function SmallBanner(props) {
  return _react.default.createElement(_palette.Flex, {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    mt: 2
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    justifyContent: "center",
    mr: 2
  }, _react.default.createElement(_palette.Sans, {
    weight: "medium",
    size: "2"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.meta)), _react.default.createElement(_palette.Serif, {
    size: "4t"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.name)), _react.default.createElement(_palette.Serif, {
    size: "4t",
    color: "black60"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, props.subHeadline))), _react.default.createElement(_palette.Avatar, {
    size: "sm",
    src: props.imageUrl,
    initials: props.initials
  }));
};

exports.SmallBanner = SmallBanner;
//# sourceMappingURL=Banner.js.map