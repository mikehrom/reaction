"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSystemContext = exports.withSystemContext = exports.SystemContextConsumer = exports.SystemContextProvider = exports.SystemContext = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireWildcard(require("react"));

var _createRelaySSREnvironment = require("./Relay/createRelaySSREnvironment");

var _user = require("../Utils/user");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SystemContext = _react.default.createContext({});
/**
 * Creates a new Context.Provider with a user and Relay environment, or defaults
 * if not passed in as props.
 */


exports.SystemContext = SystemContext;

var SystemContextProvider = function SystemContextProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var user = (0, _user.getUser)(props.user);
  var relayEnvironment = props.relayEnvironment || (0, _createRelaySSREnvironment.createRelaySSREnvironment)({
    user: user
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setIsFetching = _useState2[1];

  var providerValues = _objectSpread({}, props, {
    isFetching: isFetching,
    setIsFetching: setIsFetching,
    relayEnvironment: relayEnvironment,
    user: user
  });

  return _react.default.createElement(SystemContext.Provider, {
    value: providerValues
  }, children);
};

exports.SystemContextProvider = SystemContextProvider;
var SystemContextConsumer = SystemContext.Consumer;
/**
 * A HOC utility function for injecting renderProps into a component.
 */

exports.SystemContextConsumer = SystemContextConsumer;

var withSystemContext = function withSystemContext(Component) {
  return function (props) {
    return _react.default.createElement(SystemContextConsumer, null, function (contextValues) {
      return _react.default.createElement(Component, _extends({}, contextValues, props));
    });
  };
};
/**
 * Custom hook to access SystemContext
 */


exports.withSystemContext = withSystemContext;

var useSystemContext = function useSystemContext() {
  var systemContext = (0, _react.useContext)(SystemContext);
  return systemContext;
};

exports.useSystemContext = useSystemContext;
//# sourceMappingURL=SystemContext.js.map