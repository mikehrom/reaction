"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Artwork = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Theme = _interopRequireDefault(require("../../Assets/Theme"));

var _Metadata = _interopRequireDefault(require("./Metadata"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Container = _styledComponents.default.div.withConfig({
  displayName: "Artwork__Container",
  componentId: "sc-1cqdy0c-0"
})(["width:100%;"]);

var ImageContainer = _styledComponents.default.div.withConfig({
  displayName: "Artwork__ImageContainer",
  componentId: "sc-1cqdy0c-1"
})(["width:100%;position:relative;cursor:pointer;&::before{content:\"\";display:block;padding-bottom:100%;}& .overlay-container{transition:opacity 0.25s;&.hovered{opacity:0;visibility:hidden;}&.selected{opacity:1;visibility:visible;}}&:hover{& .overlay-container.hovered{", ";}}"], (0, _styledComponents.css)(["@media (min-width:", "px){opacity:1;visibility:visible;}"], _Theme.default.flexboxgrid.breakpoints.sm + 1));

var Image = _styledComponents.default.img.withConfig({
  displayName: "Artwork__Image",
  componentId: "sc-1cqdy0c-2"
})(["max-width:100%;max-height:100%;margin:auto;position:absolute;left:0;top:0;bottom:0;right:0;"]);

var Artwork =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Artwork, _React$Component);

  function Artwork() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Artwork);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Artwork)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSelected: false
    });

    _defineProperty(_assertThisInitialized(_this), "onSelected", function (e) {
      if (!_this.props.Overlay) {
        return;
      }

      _this.setState({
        isSelected: !_this.state.isSelected
      });

      if (_this.props.onSelect) {
        _this.props.onSelect(!_this.state.isSelected);
      }
    });

    return _this;
  }

  _createClass(Artwork, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          artwork = _this$props.artwork,
          Overlay = _this$props.Overlay,
          showOverlayOnHover = _this$props.showOverlayOnHover;
      var overlayClasses = "overlay-container";
      overlayClasses += showOverlayOnHover ? " hovered" : "";
      overlayClasses += this.state.isSelected ? " selected" : "";
      return _react.default.createElement(Container, {
        onClick: this.onSelected
      }, _react.default.createElement(ImageContainer, null, _react.default.createElement(Image, {
        src: artwork.image.url
      }), _react.default.createElement("div", {
        className: overlayClasses
      }, Overlay && _react.default.createElement(Overlay, {
        selected: this.state.isSelected
      }))), _react.default.createElement(_Metadata.default, {
        extended: this.props.extended,
        artwork: artwork
      }));
    }
  }]);

  return Artwork;
}(_react.default.Component);

exports.Artwork = Artwork;

_defineProperty(Artwork, "defaultProps", {
  extended: true,
  overlay: null,
  showOverlayOnHover: false
});

var _default = (0, _reactRelay.createFragmentContainer)(Artwork, {
  artwork: function artwork() {
    var node = require("../../__generated__/Artwork_artwork.graphql");

    if (node.hash && node.hash !== "05646294ec1ef54a4ec29ece7e30681e") {
      console.error("The definition of 'Artwork_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Artwork_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=index.js.map