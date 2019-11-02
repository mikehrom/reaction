"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkDetailsAdditionalInfoFragmentContainer = exports.ArtworkDetailsAdditionalInfo = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

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

var ArtworkDetailsAdditionalInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkDetailsAdditionalInfo, _React$Component);

  function ArtworkDetailsAdditionalInfo() {
    _classCallCheck(this, ArtworkDetailsAdditionalInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkDetailsAdditionalInfo).apply(this, arguments));
  }

  _createClass(ArtworkDetailsAdditionalInfo, [{
    key: "render",
    value: function render() {
      var _this$props$artwork = this.props.artwork,
          series = _this$props$artwork.series,
          publisher = _this$props$artwork.publisher,
          manufacturer = _this$props$artwork.manufacturer,
          image_rights = _this$props$artwork.image_rights,
          framed = _this$props$artwork.framed,
          signatureInfo = _this$props$artwork.signatureInfo,
          conditionDescription = _this$props$artwork.conditionDescription,
          certificateOfAuthenticity = _this$props$artwork.certificateOfAuthenticity;
      var listItems = [{
        title: "Condition",
        value: conditionDescription ? conditionDescription.details : null
      }, {
        title: "Signature",
        value: signatureInfo && signatureInfo.details
      }, {
        title: "Certificate of authenticity",
        value: certificateOfAuthenticity && certificateOfAuthenticity.details
      }, {
        title: "Frame",
        value: framed && framed.details
      }, {
        title: "Series",
        value: series
      }, {
        title: "Publisher",
        value: publisher
      }, {
        title: "Manufacturer",
        value: manufacturer
      }, {
        title: "Image rights",
        value: image_rights
      }];
      var displayItems = listItems.filter(function (i) {
        return i.value != null && i.value !== "";
      });

      if (displayItems.length === 0) {
        return null;
      }

      return _react.default.createElement(_palette.StackableBorderBox, {
        p: 2
      }, _react.default.createElement(_palette.Grid, null, displayItems.map(function (_ref, index) {
        var title = _ref.title,
            value = _ref.value;
        return _react.default.createElement(_palette.Row, {
          key: "artwork-details-".concat(index),
          pb: index === displayItems.length - 1 ? 0 : 1
        }, _react.default.createElement(_palette.Col, {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 3
        }, _react.default.createElement(_palette.Sans, {
          size: "2",
          weight: "medium",
          pr: 2
        }, title)), _react.default.createElement(_palette.Col, {
          xs: 12,
          sm: 6,
          md: 6,
          lg: 9
        }, _react.default.createElement(_palette.Sans, {
          size: "2",
          weight: "regular",
          color: "black60"
        }, _react.default.createElement(_palette.ReadMore, {
          maxChars: 140,
          content: value
        }))));
      })));
    }
  }]);

  return ArtworkDetailsAdditionalInfo;
}(_react.default.Component);

exports.ArtworkDetailsAdditionalInfo = ArtworkDetailsAdditionalInfo;
var ArtworkDetailsAdditionalInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkDetailsAdditionalInfo, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkDetailsAdditionalInfo_artwork.graphql");

    if (node.hash && node.hash !== "24faf5a518a2d1dd07edcaaf5872be3a") {
      console.error("The definition of 'ArtworkDetailsAdditionalInfo_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkDetailsAdditionalInfo_artwork.graphql");
  }
});
exports.ArtworkDetailsAdditionalInfoFragmentContainer = ArtworkDetailsAdditionalInfoFragmentContainer;
//# sourceMappingURL=ArtworkDetailsAdditionalInfo.js.map