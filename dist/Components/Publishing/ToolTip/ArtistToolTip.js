"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistTooltipContainer = exports.TitleDate = exports.ArtistContainer = exports.ArtistToolTip = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

var _map2 = _interopRequireDefault(require("lodash/map"));

var _Fonts = require("../../../Assets/Fonts");

var _FollowArtistButton = require("../../FollowButton/FollowArtistButton");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fillwidth = _interopRequireDefault(require("../../../Utils/fillwidth"));

var _Description = require("./Components/Description");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArtistToolTip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistToolTip, _React$Component);

  function ArtistToolTip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistToolTip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistToolTip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "trackClick", function () {
      var tracking = _this.props.tracking;
      var href = _this.props.artist.href;
      tracking.trackEvent({
        action: "Click",
        flow: "tooltip",
        type: "artist stub",
        contextModule: "intext tooltip",
        destination_path: href
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderArtistGenes", function () {
      var genes = _this.props.artist.genes;

      if (genes.length) {
        return (0, _map2.default)(genes, "name").join(", ");
      }
    });

    return _this;
  }

  _createClass(ArtistToolTip, [{
    key: "render",
    value: function render() {
      var artist = this.props.artist;
      var blurb = artist.blurb,
          carousel = artist.carousel,
          formatted_nationality_and_birthday = artist.formatted_nationality_and_birthday,
          href = artist.href,
          id = artist.id,
          _id = artist._id,
          name = artist.name;
      var _this$context = this.context,
          artists = _this$context.tooltipsData.artists,
          onOpenAuthModal = _this$context.onOpenAuthModal;
      var displayImages = (0, _map2.default)(carousel.images.slice(0, 2), "resized");
      var images = (0, _fillwidth.default)(displayImages, 320, 15, 150);
      var description = blurb || this.renderArtistGenes();
      var trackingData = {
        contextModule: "intext tooltip",
        entity_id: _id,
        entity_slug: id,
        entity_type: "artist"
      };
      return _react.default.createElement(Wrapper, null, _react.default.createElement(ArtistContainer, null, images && _react.default.createElement(Images, {
        href: href,
        onClick: this.trackClick
      }, images.map(function (img, i) {
        return _react.default.createElement("div", {
          key: i
        }, _react.default.createElement("img", {
          src: img.__id
        }));
      })), _react.default.createElement(Header, null, _react.default.createElement(TitleDate, {
        href: href,
        target: "_blank",
        onClick: this.trackClick
      }, _react.default.createElement(Title, null, name), formatted_nationality_and_birthday && _react.default.createElement(Date, null, formatted_nationality_and_birthday)), _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
        artist: artists[id],
        trackingData: trackingData,
        onOpenAuthModal: onOpenAuthModal
      })), _react.default.createElement("a", {
        href: href,
        target: "_blank",
        onClick: this.trackClick
      }, description && _react.default.createElement(_Description.ToolTipDescription, {
        text: description
      }))));
    }
  }]);

  return ArtistToolTip;
}(_react.default.Component);

exports.ArtistToolTip = ArtistToolTip;

_defineProperty(ArtistToolTip, "contextTypes", {
  tooltipsData: _propTypes.default.object,
  onOpenAuthModal: _propTypes.default.func
});

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "ArtistToolTip__Wrapper",
  componentId: "waw8a6-0"
})(["width:320px;"]);

var ArtistContainer = _styledComponents.default.div.withConfig({
  displayName: "ArtistToolTip__ArtistContainer",
  componentId: "waw8a6-1"
})(["position:relative;a{text-decoration:none;color:black;&:hover{color:black;}}"]);

exports.ArtistContainer = ArtistContainer;

var Header = _styledComponents.default.div.withConfig({
  displayName: "ArtistToolTip__Header",
  componentId: "waw8a6-2"
})(["display:flex;flex-direction:row;justify-content:space-between;padding-bottom:10px;"]);

var TitleDate = _styledComponents.default.a.withConfig({
  displayName: "ArtistToolTip__TitleDate",
  componentId: "waw8a6-3"
})(["display:flex;flex-direction:column;"]);

exports.TitleDate = TitleDate;

var Title = _styledComponents.default.div.withConfig({
  displayName: "ArtistToolTip__Title",
  componentId: "waw8a6-4"
})(["", ";font-weight:600;"], (0, _Fonts.garamond)("s18"));

var Date = _styledComponents.default.div.withConfig({
  displayName: "ArtistToolTip__Date",
  componentId: "waw8a6-5"
})(["", ";"], (0, _Fonts.unica)("s14", "medium"));

var Images = _styledComponents.default.a.withConfig({
  displayName: "ArtistToolTip__Images",
  componentId: "waw8a6-6"
})(["width:100%;margin-bottom:20px;display:flex;justify-content:space-between;div:first-child{margin-right:15px;}img{width:100%;height:auto;}"]);

var ArtistTooltipContainer = (0, _reactTracking.default)({})((0, _reactRelay.createFragmentContainer)(ArtistToolTip, {
  artist: function artist() {
    var node = require("../../../__generated__/ArtistToolTip_artist.graphql");

    if (node.hash && node.hash !== "b66365bad87a0ff55816fd0106213acb") {
      console.error("The definition of 'ArtistToolTip_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtistToolTip_artist.graphql");
  }
}));
exports.ArtistTooltipContainer = ArtistTooltipContainer;
//# sourceMappingURL=ArtistToolTip.js.map