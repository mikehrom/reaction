"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarTitleInfoFragmentContainer = exports.ArtworkSidebarTitleInfo = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.replace");

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

var ArtworkSidebarTitleInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarTitleInfo, _React$Component);

  function ArtworkSidebarTitleInfo() {
    _classCallCheck(this, ArtworkSidebarTitleInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebarTitleInfo).apply(this, arguments));
  }

  _createClass(ArtworkSidebarTitleInfo, [{
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      return _react.default.createElement(_palette.Box, {
        color: "black60"
      }, _react.default.createElement(_palette.Serif, {
        size: "2",
        element: "h2"
      }, _react.default.createElement("i", null, artwork.title), artwork.date && artwork.date.replace(/\s+/g, "").length > 0 && ", " + artwork.date), artwork.medium && _react.default.createElement(_palette.Serif, {
        size: "2"
      }, artwork.medium));
    }
  }]);

  return ArtworkSidebarTitleInfo;
}(_react.default.Component);

exports.ArtworkSidebarTitleInfo = ArtworkSidebarTitleInfo;
var ArtworkSidebarTitleInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarTitleInfo, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarTitleInfo_artwork.graphql");

    if (node.hash && node.hash !== "3a3e32595a7e874f0bca9e3ce4033193") {
      console.error("The definition of 'ArtworkSidebarTitleInfo_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarTitleInfo_artwork.graphql");
  }
});
exports.ArtworkSidebarTitleInfoFragmentContainer = ArtworkSidebarTitleInfoFragmentContainer;
//# sourceMappingURL=ArtworkSidebarTitleInfo.js.map