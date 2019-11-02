"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionTimerQueryRenderer = exports.AuctionTimerFragmentContainer = exports.AuctionTimer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _Artsy = require("../../Artsy");

var _SystemQueryRenderer = require("../../Artsy/Relay/SystemQueryRenderer");

var _Timer = require("./Timer");

var _luxon = require("luxon");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

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

var AuctionTimer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AuctionTimer, _React$Component);

  function AuctionTimer() {
    _classCallCheck(this, AuctionTimer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuctionTimer).apply(this, arguments));
  }

  _createClass(AuctionTimer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Timer.Timer, {
        labelWithTimeRemaining: this.labelWithTimeRemaining(),
        labelWithoutTimeRemaining: this.labelWithoutTimeRemaining(),
        endDate: this.endDate
      });
    }
  }, {
    key: "labelWithTimeRemaining",
    value: function labelWithTimeRemaining() {
      var dateTime = _luxon.DateTime.fromISO(this.endDate);

      var amPm = dateTime.hour >= 12 ? "pm" : "am";
      var minutes = dateTime.minute < 10 ? "0" + dateTime.minute : dateTime.minute;
      var hour;

      if (dateTime.hour > 12) {
        hour = dateTime.hour - 12;
      } else if (dateTime.hour === 0) {
        hour = 12;
      } else {
        hour = dateTime.hour;
      }

      var display = "".concat(dateTime.monthShort, " ").concat(dateTime.day, ", ").concat(hour, ":").concat(minutes).concat(amPm);

      if (this.liveStartAt) {
        return "Live ".concat(display);
      } else {
        return "Ends ".concat(display);
      }
    }
  }, {
    key: "labelWithoutTimeRemaining",
    value: function labelWithoutTimeRemaining() {
      if (this.liveStartAt) {
        return "In progress";
      } else {
        return "Bidding closed";
      }
    }
  }, {
    key: "endDate",
    get: function get() {
      var sale = this.props.sale;
      var end_at = sale.end_at;
      return this.liveStartAt || end_at;
    }
  }, {
    key: "liveStartAt",
    get: function get() {
      var sale = this.props.sale;
      var live_start_at = sale.live_start_at; // TODO: Figure out why this comes back from MP

      if (live_start_at !== "Invalid date") {
        return live_start_at;
      }

      return null;
    }
  }]);

  return AuctionTimer;
}(_react.default.Component);

exports.AuctionTimer = AuctionTimer;
var AuctionTimerFragmentContainer = (0, _reactRelay.createFragmentContainer)(AuctionTimer, {
  sale: function sale() {
    var node = require("../../__generated__/AuctionTimer_sale.graphql");

    if (node.hash && node.hash !== "1f2163f3979be7879c3399cf91a8524f") {
      console.error("The definition of 'AuctionTimer_sale' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/AuctionTimer_sale.graphql");
  }
});
exports.AuctionTimerFragmentContainer = AuctionTimerFragmentContainer;

var AuctionTimerQueryRenderer = function AuctionTimerQueryRenderer(_ref) {
  var saleID = _ref.saleID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      saleID: saleID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../__generated__/AuctionTimerQuery.graphql");

      if (node.hash && node.hash !== "67de4ea3de2f4ebe608f8bd2df2d6b88") {
        console.error("The definition of 'AuctionTimerQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/AuctionTimerQuery.graphql");
    }),
    render: function render(_ref2) {
      var props = _ref2.props;
      return props && _react.default.createElement(AuctionTimerFragmentContainer, {
        sale: props.sale
      });
    }
  });
};

exports.AuctionTimerQueryRenderer = AuctionTimerQueryRenderer;
//# sourceMappingURL=AuctionTimer.js.map