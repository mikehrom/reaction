"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderError = exports.RenderReady = exports.RenderPending = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _reactStaticContainer = _interopRequireDefault(require("react-static-container"));

var _palette = require("@artsy/palette");

var _ErrorPage = require("../../../Components/ErrorPage");

var _ElementsRenderer = _interopRequireDefault(require("found/lib/ElementsRenderer"));

var _sharify = require("sharify");

var _logger = _interopRequireDefault(require("../../../Utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var logger = (0, _logger.default)("Artsy/Router/Utils/RenderStatus");

var RenderPending = function RenderPending() {
  /**
   * TODO: Add timeout here for when a request takes too long. Show generic error
   * and notify Sentry.
   */
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Renderer, null, null), _react.default.createElement(_palette.PageLoader, {
    className: "reactionPageLoader" // positional styling comes from Force body.styl
    ,
    showBackground: false,
    style: {
      position: "fixed",
      left: 0,
      top: -6
    }
  }));
};

exports.RenderPending = RenderPending;

var RenderReady = function RenderReady(props) {
  return _react.default.createElement(Renderer, {
    shouldUpdate: true
  }, _react.default.createElement(_ElementsRenderer.default, {
    elements: props.elements
  }));
};

exports.RenderReady = RenderReady;

var RenderError = function RenderError(props) {
  logger.error(props.error.data);
  var message = (process.env.NODE_ENV || _sharify.data.NODE_ENV) === "development" ? String(props.error.data) : "Internal error"; // TODO: Make error code more granular. See:
  // https://artsyproduct.atlassian.net/browse/PLATFORM-1343
  // https://github.com/artsy/reaction/pull/1855

  return _react.default.createElement(_ErrorPage.ErrorPage, {
    code: props.error.status || 500,
    message: message
  });
};
/**
 * Define a container component so that we don't run into reconciliation issues
 * due to an element existing in RenderPending that doesn't exist in RenderReady,
 * between the top most container and StaticContainer.
 *
 */


exports.RenderError = RenderError;

var Renderer = function Renderer(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_palette.Box, null, _react.default.createElement(_reactStaticContainer.default, props, children));
};
//# sourceMappingURL=RenderStatus.js.map