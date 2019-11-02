"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtherAuctionsQueryRenderer = exports.OtherAuctionsFragmentContainer = exports.OtherAuctions = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _renderWithLoadProgress = require("../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../Artsy/Relay/SystemQueryRenderer");

var _AuctionCard = require("../../../Components/v2/AuctionCard");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _Header = require("./OtherWorks/Header");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OtherAuctions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OtherAuctions, _React$Component);

  function OtherAuctions() {
    _classCallCheck(this, OtherAuctions);

    return _possibleConstructorReturn(this, _getPrototypeOf(OtherAuctions).apply(this, arguments));
  }

  _createClass(OtherAuctions, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_palette.Box, {
        mt: 6
      }, _react.default.createElement(_Header.Header, {
        title: "Other auctions",
        buttonHref: _sharify.data.APP_URL + "/auctions"
      }), _react.default.createElement(_palette.Flex, {
        flexWrap: "wrap",
        mr: -2,
        width: "100%"
      }, this.props.sales.map(function (auction, index) {
        return _react.default.createElement(_palette.Box, {
          pr: 2,
          mb: [1, 4],
          width: ["100%", "25%"],
          key: index
        }, _react.default.createElement(_AuctionCard.AuctionCardFragmentContainer, {
          sale: auction
        }));
      })));
    }
  }]);

  return OtherAuctions;
}(_react.default.Component);

exports.OtherAuctions = OtherAuctions;
var OtherAuctionsFragmentContainer = (0, _reactRelay.createFragmentContainer)(OtherAuctions, {
  sales: function sales() {
    var node = require("../../../__generated__/OtherAuctions_sales.graphql");

    if (node.hash && node.hash !== "a958527d99f4fac7d2d2cd1c0e826c82") {
      console.error("The definition of 'OtherAuctions_sales' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/OtherAuctions_sales.graphql");
  }
});
exports.OtherAuctionsFragmentContainer = OtherAuctionsFragmentContainer;

var OtherAuctionsQueryRenderer = function OtherAuctionsQueryRenderer() {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      size: 4,
      sort: "TIMELY_AT_NAME_ASC"
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../__generated__/OtherAuctionsQuery.graphql");

      if (node.hash && node.hash !== "37e973d766825e056e135f0b2e69277a") {
        console.error("The definition of 'OtherAuctionsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../__generated__/OtherAuctionsQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(OtherAuctionsFragmentContainer)
  });
};

exports.OtherAuctionsQueryRenderer = OtherAuctionsQueryRenderer;
//# sourceMappingURL=OtherAuctions.js.map