"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouterLink = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.reduce");

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _found = require("found");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Wrapper component around found's <Link> component with a fallback to a normal
 * <a> tag if ouside of a routing context.
 *
 * NOTE: If using styled-components, <RouterLink> can be easily styled like so:
 *
 * const StyledLink = styled(RouterLink)`
 *   ...
 * `
 */
var RouterLink = function RouterLink(_ref, context) {
  var to = _ref.to,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["to", "children"]);

  var isRouterContext = Boolean(context.router); // Only pass found-router specific props across, props that conform to the
  // link API found here: https://github.com/4Catalyzer/found#links

  var handlers = Object.keys(props).reduce(function (acc, prop) {
    if (prop.startsWith("on")) {
      acc.push(prop);
    }

    return acc;
  }, []);

  if (isRouterContext) {
    var allowedProps = (0, _pick2.default)(props, ["Component", "activeClassName", "className", "exact", "replace", "style"].concat(_toConsumableArray(handlers)));
    return _react.default.createElement(_found.Link, _extends({
      to: to
    }, allowedProps), children);
  } else {
    return _react.default.createElement("a", _extends({
      href: to,
      className: props.className,
      style: props.style
    }, props), children);
  }
};
/**
 * FIXME: Upgrade to Found v.4: https://github.com/4Catalyzer/found/releases/tag/v0.4.0,
 * which supports React 14.3 context style.
 */


exports.RouterLink = RouterLink;
RouterLink.contextTypes = {
  router: _propTypes.default.any
};
//# sourceMappingURL=RouterLink.js.map