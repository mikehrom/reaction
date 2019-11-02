"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Boot = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var Sentry = _interopRequireWildcard(require("@sentry/browser"));

var Artsy = _interopRequireWildcard(require("./.."));

var _Analytics = require("../Analytics");

var _ErrorBoundary = require("../../Components/ErrorBoundary");

var _react = _interopRequireDefault(require("react"));

var _reactHead = require("react-head");

var _sharify = require("sharify");

var _unstated = require("unstated");

var _BreakpointVisualizer = require("../../Utils/BreakpointVisualizer");

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _Responsive = require("../../Utils/Responsive");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// FIXME: When we update to latest @types/styled-components `suppressMultiMountWarning`
// issue will be fixed
var _injectGlobalStyles = (0, _palette.injectGlobalStyles)(),
    GlobalStyles = _injectGlobalStyles.GlobalStyles;

var Boot = (_dec = (0, _Analytics.track)(null, {
  dispatch: function dispatch(data) {
    _Events.default.postEvent(data);
  }
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Boot, _React$Component);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, _getPrototypeOf(Boot).apply(this, arguments));
  }

  _createClass(Boot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var env = _sharify.data.NODE_ENV || process.env && process.env.NODE_ENV;

      if (env === "production") {
        Sentry.init({
          dsn: _sharify.data.SENTRY_PUBLIC_DSN
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          context = _this$props.context,
          _this$props$headTags = _this$props.headTags,
          headTags = _this$props$headTags === void 0 ? [] : _this$props$headTags,
          props = _objectWithoutProperties(_this$props, ["children", "context", "headTags"]);

      var contextProps = _objectSpread({}, props, context);

      return _react.default.createElement(_ErrorBoundary.ErrorBoundary, null, _react.default.createElement(_reactHead.HeadProvider, {
        headTags: headTags
      }, _react.default.createElement(_unstated.Provider, null, _react.default.createElement(Artsy.SystemContextProvider, contextProps, _react.default.createElement(_Responsive.MediaContextProvider, {
        onlyMatch: props.onlyMatchMediaQueries
      }, _react.default.createElement(_Responsive.ResponsiveProvider, {
        mediaQueries: _palette.themeProps.mediaQueries,
        initialMatchingMediaQueries: props.onlyMatchMediaQueries
      }, _react.default.createElement(_palette.Theme, null, _react.default.createElement(_palette.Grid, {
        fluid: true
      }, _react.default.createElement(GlobalStyles, {
        suppressMultiMountWarning: true
      }), children, process.env.NODE_ENV === "development" && _react.default.createElement(_BreakpointVisualizer.BreakpointVisualizer, null)))))))));
    }
  }]);

  return Boot;
}(_react.default.Component)) || _class); // Tests

exports.Boot = Boot;
GlobalStyles.displayName = "GlobalStyles";
_palette.Grid.displayName = "Grid";
//# sourceMappingURL=Boot.js.map