"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionResultsState = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _unstated = require("unstated");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AuctionResultsState =
/*#__PURE__*/
function (_Container) {
  _inherits(AuctionResultsState, _Container);

  function AuctionResultsState() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AuctionResultsState);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AuctionResultsState)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showModal: false,
      sort: "DATE_DESC",
      selectedAuction: null
    });

    _defineProperty(_assertThisInitialized(_this), "setPage", function (page) {
      _this.setState({
        page: page
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSort", function (sort) {
      _this.setState({
        sort: sort
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showDetailsModal", function (selectedAuction) {
      _this.setState({
        showModal: true,
        selectedAuction: selectedAuction
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideDetailsModal", function () {
      _this.setState({
        showModal: false,
        selectedAuction: null
      });
    });

    return _this;
  }

  return AuctionResultsState;
}(_unstated.Container);

exports.AuctionResultsState = AuctionResultsState;
//# sourceMappingURL=state.js.map