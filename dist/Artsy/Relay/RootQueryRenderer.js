"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RootQueryRenderer = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _ = require("./..");

var _react = _interopRequireDefault(require("react"));

var _SystemQueryRenderer = require("./SystemQueryRenderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Renderer = function Renderer(_ref) {
  var user = _ref.user,
      relayEnvironment = _ref.relayEnvironment,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["user", "relayEnvironment", "children"]);

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, _extends({}, props, {
    environment: relayEnvironment
  }));
};

var RendererWithContext = (0, _.withSystemContext)(Renderer);
/**
 * This component is, for now, mostly intended as an easy way to render stories, as it combines the Artsy
 * `ContextProvider` component and Relay‘s `QueryRenderer` component.
 *
 * We’ll need to see if it makes sense to use this as an entry point to render component trees from Reaction in Force.
 */

var RootQueryRenderer = function RootQueryRenderer(_ref2) {
  var user = _ref2.user,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["user", "children"]);

  return _react.default.createElement(_.SystemContextProvider, {
    user: user
  }, _react.default.createElement(RendererWithContext, props));
};

exports.RootQueryRenderer = RootQueryRenderer;
//# sourceMappingURL=RootQueryRenderer.js.map