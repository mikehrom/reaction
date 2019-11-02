"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _commonElements = require("./commonElements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var handleTypeChange = props.handleTypeChange,
      inline = props.inline,
      mode = props.mode,
      onFacebookLogin = props.onFacebookLogin,
      showRecaptchaDisclaimer = props.showRecaptchaDisclaimer;

  switch (mode) {
    case "login":
      {
        return _react.default.createElement(_palette.Flex, {
          flexDirection: inline ? "row" : "column",
          justifyContent: "center"
        }, _react.default.createElement(_commonElements.FooterText, null, "Log in using ", _react.default.createElement(_palette.Link, {
          color: "black60",
          onClick: onFacebookLogin
        }, "Facebook"), ". "), _react.default.createElement(_commonElements.FooterText, null, "Don’t have an account? ", _react.default.createElement(_palette.Link, {
          color: "black60",
          onClick: function onClick() {
            return handleTypeChange("signup");
          }
        }, "Sign up.")));
      }

    case "forgot":
      {
        return _react.default.createElement(_palette.Box, {
          textAlign: "center"
        }, _react.default.createElement(_commonElements.FooterText, null, "Don’t need to reset? ", _react.default.createElement(_palette.Link, {
          color: "black60",
          onClick: function onClick() {
            return handleTypeChange("login");
          }
        }, "Log in"), " or ", _react.default.createElement(_palette.Link, {
          color: "black60",
          onClick: function onClick() {
            return handleTypeChange("signup");
          }
        }, "sign up.")));
      }

    default:
      {
        return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Flex, {
          flexDirection: inline ? "row" : "column",
          justifyContent: "center"
        }, _react.default.createElement(_commonElements.FooterText, null, _react.default.createElement(_palette.Link, {
          color: "black60",
          onClick: onFacebookLogin
        }, "Sign up using Facebook."), " "), _react.default.createElement(_commonElements.FooterText, null, "Already have an account? ", _react.default.createElement(_palette.Link, {
          color: "black60",
          onClick: function onClick() {
            return handleTypeChange("login");
          }
        }, "Log in."))), showRecaptchaDisclaimer && _react.default.createElement(_commonElements.CaptchaTerms, null));
      }
  }
};

exports.Footer = Footer;
//# sourceMappingURL=Footer.js.map