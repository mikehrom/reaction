"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contents = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _Artsy = require("../../../../Artsy");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _MarketInsights = _interopRequireDefault(require("./MarketInsights"));

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MarketInsightsContents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarketInsightsContents, _React$Component);

  function MarketInsightsContents() {
    _classCallCheck(this, MarketInsightsContents);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarketInsightsContents).apply(this, arguments));
  }

  _createClass(MarketInsightsContents, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          artistID = _this$props.artistID,
          relayEnvironment = _this$props.relayEnvironment;
      return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
        environment: relayEnvironment,
        query: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/MarketInsightsContentsQuery.graphql");

          if (node.hash && node.hash !== "6e4add80368a82921c5a3a6efee9be3e") {
            console.error("The definition of 'MarketInsightsContentsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/MarketInsightsContentsQuery.graphql");
        }),
        variables: {
          artistID: artistID
        },
        render: function render(_ref) {
          var props = _ref.props;

          if (props) {
            return _react.default.createElement(_MarketInsights.default, {
              artist: props.artist
            });
          } else {
            return null;
          }
        }
      });
    }
  }]);

  return MarketInsightsContents;
}(_react.default.Component);

var Contents = (0, _Artsy.withSystemContext)(MarketInsightsContents);
exports.Contents = Contents;
//# sourceMappingURL=index.js.map