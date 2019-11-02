"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer.Footer;
  }
});
Object.defineProperty(exports, "TermsOfServiceCheckbox", {
  enumerable: true,
  get: function get() {
    return _TermsOfServiceCheckbox.TermsOfServiceCheckbox;
  }
});
exports.CaptchaTerms = exports.SubmitButton = exports.ForgotPassword = exports.FooterText = exports.MobileHeader = exports.Error = exports.ErrorContainer = exports.BackButton = exports.MobileContainer = exports.MobileInnerWrapper = exports.FormContainer = void 0;

require("core-js/modules/es6.object.assign");

var _Animations = require("../../Assets/Animations");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Footer = require("./Footer");

var _TermsOfServiceCheckbox = require("./TermsOfServiceCheckbox");

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FormContainer = _styledComponents.default.form.withConfig({
  displayName: "commonElements__FormContainer",
  componentId: "sc-1afou4b-0"
})(["display:flex;flex-direction:column;min-height:", ";"], function (p) {
  return p.height ? p.height + "px" : "auto";
});

exports.FormContainer = FormContainer;

var MobileInnerWrapper = _styledComponents.default.div.withConfig({
  displayName: "commonElements__MobileInnerWrapper",
  componentId: "sc-1afou4b-1"
})(["position:relative;margin:0 20px;display:flex;flex-direction:column;height:285px;min-height:fit-content;"]);

exports.MobileInnerWrapper = MobileInnerWrapper;

var MobileContainer = _styledComponents.default.div.withConfig({
  displayName: "commonElements__MobileContainer",
  componentId: "sc-1afou4b-2"
})(["display:flex;flex-direction:column;flex:1;align-items:stretch;width:100%;min-width:260px;"]);

exports.MobileContainer = MobileContainer;

var BackButton = _styledComponents.default.div.withConfig({
  displayName: "commonElements__BackButton",
  componentId: "sc-1afou4b-3"
})(["display:flex;justify-self:start;align-self:center;position:absolute;top:35px;left:0;cursor:pointer;"]);

exports.BackButton = BackButton;
var ErrorContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "commonElements__ErrorContainer",
  componentId: "sc-1afou4b-4"
})(["margin-top:", ";visibility:", ";transition:visibility 0.2s linear;animation:", " 0.25s linear;height:", ";"], function (p) {
  return p.show ? "auto" : "0";
}, function (p) {
  return p.show ? "visible" : "hidden";
}, function (p) {
  return p.show && (0, _Animations.growAndFadeIn)("16px");
}, function (p) {
  return p.show ? "auto" : "0";
});
exports.ErrorContainer = ErrorContainer;

var Error = function Error(props) {
  return _react.default.createElement(ErrorContainer, {
    show: props.show,
    mb: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "red100"
  }, props.children));
};

exports.Error = Error;

var MobileHeader = function MobileHeader(props) {
  return _react.default.createElement(_palette.Flex, {
    p: 1,
    mt: 2,
    justifyContent: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: "5t",
    weight: "semibold",
    textAlign: "center"
  }, props.children));
};

exports.MobileHeader = MobileHeader;

var FooterText = function FooterText(props) {
  return _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60",
    mt: props.mt || 1,
    mr: 0.5,
    textAlign: "center"
  }, props.children);
};

exports.FooterText = FooterText;

var ForgotPassword = function ForgotPassword(props) {
  return _react.default.createElement(_palette.Sans, {
    size: "2"
  }, _react.default.createElement(_palette.Link, _extends({
    color: "black60"
  }, props), "Forgot Password?"));
};

exports.ForgotPassword = ForgotPassword;

var SubmitButton = function SubmitButton(props) {
  return _react.default.createElement(_palette.Button, _extends({
    width: "100%",
    size: "large",
    mt: 30.0,
    mb: 0.5
  }, props), props.children);
};

exports.SubmitButton = SubmitButton;

var CaptchaTerms = function CaptchaTerms() {
  return _react.default.createElement(FooterText, {
    mt: 2
  }, "This site is protected by reCAPTCHA and the Google", " ", _react.default.createElement(_palette.Link, {
    color: "black60",
    href: "https://policies.google.com/privacy"
  }, "Privacy Policy"), " ", _react.default.createElement(_palette.Link, {
    color: "black60",
    href: "https://policies.google.com/terms"
  }, "Terms of Service"), " ", "apply.");
};

exports.CaptchaTerms = CaptchaTerms;
//# sourceMappingURL=commonElements.js.map