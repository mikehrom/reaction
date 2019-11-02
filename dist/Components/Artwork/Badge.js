"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get2 = require("../../Utils/get");

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

var MIN_IMAGE_SIZE = 150;

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      var is_biddable = artwork.is_biddable,
          is_acquireable = artwork.is_acquireable,
          is_offerable = artwork.is_offerable,
          href = artwork.href,
          sale = artwork.sale;
      var includeBidBadge = is_biddable || sale && sale.is_preview; // E.g.(ENDS IN 59M)

      var saleTimingHint = sale && sale.display_timely_at ? " (".concat(sale.display_timely_at, ")") : "";
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Badges, {
        flexDirection: this.stackedLayout ? "column" : "row"
      }, includeBidBadge && _react.default.createElement(Label, null, _react.default.createElement(_palette.Sans, {
        size: "0"
      }, "Bid", saleTimingHint)), is_acquireable && _react.default.createElement(Label, null, _react.default.createElement(BadgeLink, {
        href: href,
        underlineBehavior: "none"
      }, _react.default.createElement(_palette.Sans, {
        size: "0"
      }, "Buy Now"))), is_offerable && _react.default.createElement(Label, null, _react.default.createElement(BadgeLink, {
        href: href,
        underlineBehavior: "none"
      }, _react.default.createElement(_palette.Sans, {
        size: "0"
      }, "Make Offer")))));
    }
  }, {
    key: "stackedLayout",
    get: function get() {
      return (0, _get2.get)(this.props, function (p) {
        return p.width / window.devicePixelRatio < MIN_IMAGE_SIZE;
      }, false);
    }
  }]);

  return Badge;
}(_react.default.Component);

var _default = (0, _reactRelay.createFragmentContainer)(Badge, {
  artwork: function artwork() {
    var node = require("../../__generated__/Badge_artwork.graphql");

    if (node.hash && node.hash !== "2acc89282c0f63455bd559089466e8f5") {
      console.error("The definition of 'Badge_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Badge_artwork.graphql");
  }
});

exports.default = _default;
var Label = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Badge__Label",
  componentId: "sc-1wx2sb5-0"
})(["border-radius:2px;letter-spacing:0.3px;padding:3px 5px 1px 6px;background-color:white;box-shadow:0 2px 5px 0 rgba(0,0,0,0.1);text-transform:uppercase;margin-left:", "px;margin-top:", "px;"], (0, _palette.space)(0.5), (0, _palette.space)(0.5));
var BadgeLink = (0, _styledComponents.default)(_palette.Link).withConfig({
  displayName: "Badge__BadgeLink",
  componentId: "sc-1wx2sb5-1"
})(["cursor:pointer;"]);
var Badges = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Badge__Badges",
  componentId: "sc-1wx2sb5-2"
})(["position:absolute;bottom:8px;left:3px;pointer-events:none;"]);
//# sourceMappingURL=Badge.js.map