"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Fillwidth = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _find2 = _interopRequireDefault(require("lodash/find"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactSizeme = _interopRequireDefault(require("react-sizeme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fillwidth = _interopRequireDefault(require("../../Utils/fillwidth"));

var _FillwidthItem = _interopRequireDefault(require("./FillwidthItem"));

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

var FillwidthContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FillwidthContainer, _React$Component);

  function FillwidthContainer() {
    _classCallCheck(this, FillwidthContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(FillwidthContainer).apply(this, arguments));
  }

  _createClass(FillwidthContainer, [{
    key: "renderArtwork",
    value: function renderArtwork(artwork, dimensions, i) {
      var gutter = this.props.gutter;
      var artworkSize = (0, _find2.default)(dimensions, ["__id", artwork.__id]);
      return _react.default.createElement(_FillwidthItem.default, {
        artwork: artwork,
        key: "artwork--" + artwork.__id,
        targetHeight: artworkSize.height,
        imageHeight: artworkSize.height,
        width: artworkSize.width,
        margin: i === dimensions.length - 1 ? 0 : gutter
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var artworks = this.props.artworks.edges;
      var dimensions = (0, _fillwidth.default)(this.props.artworks.edges, this.props.size.width, this.props.gutter, this.props.targetHeight);
      return _react.default.createElement("div", {
        className: this.props.className
      }, artworks.map(function (artwork, i) {
        return _this.renderArtwork(artwork.node, dimensions, i);
      }));
    }
  }]);

  return FillwidthContainer;
}(_react.default.Component);

var StyledFillwidth = (0, _styledComponents.default)(FillwidthContainer).withConfig({
  displayName: "Fillwidth__StyledFillwidth",
  componentId: "bm6iqn-0"
})(["margin-bottom:50px;"]);
StyledFillwidth.defaultProps = {
  targetHeight: 180,
  gutter: 10
};
var sizeMeOptions = {
  monitorHeight: false,
  refreshRate: 64,
  refreshMode: "debounce"
};
var Fillwidth = (0, _reactSizeme.default)(sizeMeOptions)(StyledFillwidth);
exports.Fillwidth = Fillwidth;

var _default = (0, _reactRelay.createFragmentContainer)(Fillwidth, {
  artworks: function artworks() {
    var node = require("../../__generated__/Fillwidth_artworks.graphql");

    if (node.hash && node.hash !== "2c137b96505cd1aae9b4750ecf6bacc7") {
      console.error("The definition of 'Fillwidth_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Fillwidth_artworks.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Fillwidth.js.map