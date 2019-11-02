"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ArtistRow = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fillwidth = _interopRequireDefault(require("../Artwork/Fillwidth"));

var _Follow = _interopRequireDefault(require("../Follow"));

var _Text = _interopRequireDefault(require("../Text"));

var _TextLink = _interopRequireDefault(require("../TextLink"));

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

var ArtistRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistRow, _React$Component);

  function ArtistRow() {
    _classCallCheck(this, ArtistRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistRow).apply(this, arguments));
  }

  _createClass(ArtistRow, [{
    key: "render",
    value: function render() {
      var artist = this.props.artist;
      return _react.default.createElement(Container, null, _react.default.createElement(Header, null, _react.default.createElement(_TextLink.default, {
        href: artist.href
      }, _react.default.createElement(_Text.default, {
        textSize: "small",
        textStyle: "primary"
      }, artist.name)), _react.default.createElement(_Follow.default, {
        artist: artist
      })), _react.default.createElement(_Fillwidth.default, {
        artworks: artist.artworks
      }));
    }
  }]);

  return ArtistRow;
}(_react.default.Component);

exports.ArtistRow = ArtistRow;

var Header = _styledComponents.default.div.withConfig({
  displayName: "ArtistRow__Header",
  componentId: "sc-11itgn9-0"
})(["display:flex;margin-bottom:20px;"]);

var Container = _styledComponents.default.div.withConfig({
  displayName: "ArtistRow__Container",
  componentId: "sc-11itgn9-1"
})(["margin-bottom:60px;"]);

var _default = (0, _reactRelay.createFragmentContainer)(ArtistRow, {
  artist: function artist() {
    var node = require("../../__generated__/ArtistRow_artist.graphql");

    if (node.hash && node.hash !== "b65c87fce5097ae99473b0bbd008e4a1") {
      console.error("The definition of 'ArtistRow_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtistRow_artist.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=ArtistRow.js.map