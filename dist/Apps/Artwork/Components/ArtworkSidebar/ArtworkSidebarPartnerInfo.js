"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarPartnerInfoFragmentContainer = exports.ArtworkSidebarPartnerInfo = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _filterLocations = require("../../Utils/filterLocations");

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

var ArtworkSidebarPartnerInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarPartnerInfo, _React$Component);

  function ArtworkSidebarPartnerInfo() {
    _classCallCheck(this, ArtworkSidebarPartnerInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebarPartnerInfo).apply(this, arguments));
  }

  _createClass(ArtworkSidebarPartnerInfo, [{
    key: "renderPartnerName",
    value: function renderPartnerName() {
      var partner = this.props.artwork.partner;

      if (!partner) {
        return null;
      }

      return partner.href ? _react.default.createElement(_palette.Serif, {
        size: "5t",
        display: "inline-block",
        weight: "semibold"
      }, _react.default.createElement("a", {
        href: partner.href
      }, partner.name)) : _react.default.createElement(_palette.Serif, {
        size: "5t",
        display: "inline-block",
        weight: "semibold"
      }, partner.name);
    }
  }, {
    key: "renderLocations",
    value: function renderLocations(locationNames) {
      return _react.default.createElement(_palette.Serif, {
        size: "2",
        display: "inline-block",
        pl: 1,
        pt: 0.3
      }, locationNames.join(", "));
    }
  }, {
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      var locationNames = artwork && artwork.partner && artwork.partner.locations && artwork.partner.locations.length > 0 && (0, _filterLocations.filterLocations)(artwork.partner.locations);
      return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), this.renderPartnerName(), locationNames && locationNames.length > 0 && _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Flex, {
        width: "100%",
        pt: 1
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_palette.LocationIcon, null)), _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, this.renderLocations(locationNames)))), _react.default.createElement(_palette.Spacer, {
        mb: 3
      }));
    }
  }]);

  return ArtworkSidebarPartnerInfo;
}(_react.default.Component);

exports.ArtworkSidebarPartnerInfo = ArtworkSidebarPartnerInfo;
var ArtworkSidebarPartnerInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarPartnerInfo, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarPartnerInfo_artwork.graphql");

    if (node.hash && node.hash !== "2d4008d718bc19a2034d96f2665bacf9") {
      console.error("The definition of 'ArtworkSidebarPartnerInfo_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarPartnerInfo_artwork.graphql");
  }
});
exports.ArtworkSidebarPartnerInfoFragmentContainer = ArtworkSidebarPartnerInfoFragmentContainer;
//# sourceMappingURL=ArtworkSidebarPartnerInfo.js.map