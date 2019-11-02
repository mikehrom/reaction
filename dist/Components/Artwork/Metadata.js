"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Metadata = exports.MetadataContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Fonts = require("../../Assets/Fonts");

var _TextLink = _interopRequireDefault(require("../TextLink"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Details = require("./Details");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MetadataContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MetadataContainer, _React$Component);

  function MetadataContainer() {
    _classCallCheck(this, MetadataContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetadataContainer).apply(this, arguments));
  }

  _createClass(MetadataContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          artwork = _this$props.artwork,
          className = _this$props.className,
          extended = _this$props.extended;
      return _react.default.createElement(_TextLink.default, {
        href: artwork.href
      }, _react.default.createElement("div", {
        className: className
      }, _react.default.createElement(_Details.DetailsFragmentContainer, {
        includeLinks: false,
        showSaleLine: extended,
        artwork: artwork
      })));
    }
  }]);

  return MetadataContainer;
}(_react.default.Component);

exports.MetadataContainer = MetadataContainer;

_defineProperty(MetadataContainer, "defaultProps", {
  extended: true
});

var Metadata = (0, _styledComponents.default)(MetadataContainer).withConfig({
  displayName: "Metadata",
  componentId: "sc-18wfa1g-0"
})(["", ";color:", ";margin-top:12px;text-align:left;"], (0, _Fonts.garamond)("s15"), _Colors.default.graySemibold);
exports.Metadata = Metadata;

var _default = (0, _reactRelay.createFragmentContainer)(Metadata, {
  artwork: function artwork() {
    var node = require("../../__generated__/Metadata_artwork.graphql");

    if (node.hash && node.hash !== "5e64e5a09dbf4016cd89ec6a41b009e5") {
      console.error("The definition of 'Metadata_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Metadata_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Metadata.js.map