"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarSizeInfoFragmentContainer = exports.ArtworkSidebarSizeInfo = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

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

var ArtworkSidebarSizeInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarSizeInfo, _React$Component);

  function ArtworkSidebarSizeInfo() {
    _classCallCheck(this, ArtworkSidebarSizeInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebarSizeInfo).apply(this, arguments));
  }

  _createClass(ArtworkSidebarSizeInfo, [{
    key: "render",
    value: function render() {
      var _this$props$piece = this.props.piece,
          dimensions = _this$props$piece.dimensions,
          edition_of = _this$props$piece.edition_of;

      if (!(edition_of && edition_of.length) && !(dimensions && (dimensions.in || dimensions.cm))) {
        return null;
      }

      return _react.default.createElement(_palette.Box, {
        color: "black60"
      }, dimensions.in && _react.default.createElement(_palette.Serif, {
        size: "2"
      }, dimensions.in), dimensions.cm && _react.default.createElement(_palette.Serif, {
        size: "2"
      }, dimensions.cm), edition_of && _react.default.createElement(_palette.Serif, {
        size: "2"
      }, edition_of));
    }
  }]);

  return ArtworkSidebarSizeInfo;
}(_react.default.Component);

exports.ArtworkSidebarSizeInfo = ArtworkSidebarSizeInfo;
var ArtworkSidebarSizeInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarSizeInfo, {
  piece: function piece() {
    var node = require("../../../../__generated__/ArtworkSidebarSizeInfo_piece.graphql");

    if (node.hash && node.hash !== "0b7abbfbf9eeaea9d739a6744e2c2403") {
      console.error("The definition of 'ArtworkSidebarSizeInfo_piece' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarSizeInfo_piece.graphql");
  }
});
exports.ArtworkSidebarSizeInfoFragmentContainer = ArtworkSidebarSizeInfoFragmentContainer;
//# sourceMappingURL=ArtworkSidebarSizeInfo.js.map