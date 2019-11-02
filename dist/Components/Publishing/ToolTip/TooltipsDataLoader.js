"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipsData = exports.TooltipsDataLoader = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _keyBy2 = _interopRequireDefault(require("lodash/keyBy"));

var Artsy = _interopRequireWildcard(require("../../../Artsy"));

var _Constants = require("../Constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TooltipsDataLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(TooltipsDataLoader, _Component);

  function TooltipsDataLoader() {
    _classCallCheck(this, TooltipsDataLoader);

    return _possibleConstructorReturn(this, _getPrototypeOf(TooltipsDataLoader).apply(this, arguments));
  }

  _createClass(TooltipsDataLoader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          article = _this$props.article,
          children = _this$props.children,
          user = _this$props.user,
          relayEnvironment = _this$props.relayEnvironment,
          shouldFetchData = _this$props.shouldFetchData,
          onOpenAuthModal = _this$props.onOpenAuthModal;

      var _getArtsySlugsFromArt = (0, _Constants.getArtsySlugsFromArticle)(article),
          artistSlugs = _getArtsySlugsFromArt.artists,
          geneSlugs = _getArtsySlugsFromArt.genes;

      if (!shouldFetchData) {
        return children;
      }

      return _react.default.createElement(_reactRelay.QueryRenderer, {
        environment: relayEnvironment,
        query: _graphql || (_graphql = function _graphql() {
          var node = require("../../../__generated__/TooltipsDataLoaderQuery.graphql");

          if (node.hash && node.hash !== "a2937409c3f2edc519a6b78d0d2a0a82") {
            console.error("The definition of 'TooltipsDataLoaderQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../__generated__/TooltipsDataLoaderQuery.graphql");
        }),
        variables: {
          artistSlugs: artistSlugs,
          geneSlugs: geneSlugs
        },
        render: function render(readyState) {
          var data = {
            artists: [],
            genes: []
          };
          Object.keys(readyState.props || {}).forEach(function (key) {
            var col = readyState.props[key];
            data[key] = (0, _keyBy2.default)(col, "id");
          });
          return _react.default.createElement(TooltipsContextProvider, _extends({}, data, {
            user: user,
            onOpenAuthModal: onOpenAuthModal
          }), children);
        }
      });
    }
  }]);

  return TooltipsDataLoader;
}(_react.Component);

exports.TooltipsDataLoader = TooltipsDataLoader;

_defineProperty(TooltipsDataLoader, "defaultProps", {
  shouldFetchData: true
});

var TooltipsContextProvider =
/*#__PURE__*/
function (_Component2) {
  _inherits(TooltipsContextProvider, _Component2);

  function TooltipsContextProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TooltipsContextProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TooltipsContextProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeToolTip: null,
      waitForFade: null
    });

    _defineProperty(_assertThisInitialized(_this), "onTriggerToolTip", function (activeToolTip) {
      if (activeToolTip !== _this.state.activeToolTip) {
        if (activeToolTip === null) {
          setTimeout(function () {
            _this.setState({
              waitForFade: null
            });
          }, 250);
        }

        _this.setState({
          activeToolTip: activeToolTip,
          waitForFade: _this.state.activeToolTip
        });
      }
    });

    return _this;
  }

  _createClass(TooltipsContextProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props2 = this.props,
          artists = _this$props2.artists,
          user = _this$props2.user,
          genes = _this$props2.genes,
          onOpenAuthModal = _this$props2.onOpenAuthModal;
      var _this$state = this.state,
          activeToolTip = _this$state.activeToolTip,
          waitForFade = _this$state.waitForFade;
      return {
        activeToolTip: activeToolTip,
        user: user,
        onOpenAuthModal: onOpenAuthModal,
        onTriggerToolTip: this.onTriggerToolTip,
        tooltipsData: {
          artists: artists,
          genes: genes
        },
        waitForFade: waitForFade
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return TooltipsContextProvider;
}(_react.Component);

_defineProperty(TooltipsContextProvider, "childContextTypes", {
  activeToolTip: _propTypes.default.any,
  user: _propTypes.default.object,
  onOpenAuthModal: _propTypes.default.func,
  onTriggerToolTip: _propTypes.default.func,
  tooltipsData: _propTypes.default.object,
  waitForFade: _propTypes.default.string
});

var TooltipsData = Artsy.withSystemContext(TooltipsDataLoader);
exports.TooltipsData = TooltipsData;
//# sourceMappingURL=TooltipsDataLoader.js.map