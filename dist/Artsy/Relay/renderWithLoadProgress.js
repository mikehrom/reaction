"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderWithLoadProgress = renderWithLoadProgress;
exports.LoadingClassName = exports.RouteSpinner = void 0;

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logger = _interopRequireDefault(require("../../Utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WARNING: Do _not_ change this element to something common like a div. If the
 * element of this container is the same as the element used in the RelayContainer
 * then rehydration can fail and cause the RelayContainer to receive styles
 * from the SpinnerContainer and Spinner.
 */
var SpinnerContainer = _styledComponents.default.figure.withConfig({
  displayName: "renderWithLoadProgress__SpinnerContainer",
  componentId: "sc-1i7p8yh-0"
})(["align-items:center;display:flex;flex-direction:column;justify-content:center;position:relative;margin:unset;padding:22px;"]);

var RouteSpinnerContainer = _styledComponents.default.figure.withConfig({
  displayName: "renderWithLoadProgress__RouteSpinnerContainer",
  componentId: "sc-1i7p8yh-1"
})(["width:100%;height:100px;position:relative;"]);

var RouteSpinner = function RouteSpinner() {
  return _react.default.createElement(RouteSpinnerContainer, {
    className: LoadingClassName
  }, _react.default.createElement(_palette.Spinner, null));
};

exports.RouteSpinner = RouteSpinner;
var LoadingClassName = "relay-loading";
exports.LoadingClassName = LoadingClassName;

var handleError = function handleError(error) {
  // In tests we want errors to clearly bubble up.
  if (typeof jest !== "undefined") {
    throw error;
  }

  var logger = (0, _logger.default)("Artsy/Relay/renderWithLoadProgress");

  if (error.message) {
    logger.error(error.message);
  }

  var networkError = error;

  if (networkError.response && networkError.response._bodyInit) {
    var body = networkError.response._bodyInit;

    try {
      var data = JSON.parse(body);
      console.error("Metaphysics Error data:", data);
      logger.error(data);
    } catch (e) {
      logger.error("Metaphysics Error could not be parsed.", e);
    }
  }
};

function renderWithLoadProgress(Container) {
  var initialProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var wrapperProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var spinnerProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // TODO: We need design for retrying or the approval to use the iOS design.
  return function (_ref) {
    var error = _ref.error,
        props = _ref.props,
        retry = _ref.retry;

    if (error) {
      // TODO: Should we add a callback here so that containers can gracefully
      //       handle an error state?
      handleError(error);
      return null;
    } else if (props) {
      return _react.default.createElement(Container, _extends({}, initialProps, props));
    } else {
      return _react.default.createElement(SpinnerContainer, _extends({
        className: LoadingClassName
      }, wrapperProps), _react.default.createElement(_palette.Spinner, spinnerProps));
    }
  };
}
//# sourceMappingURL=renderWithLoadProgress.js.map