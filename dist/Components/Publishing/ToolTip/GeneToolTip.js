"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneToolTipContainer = exports.ToolTipFooter = exports.GeneContainer = exports.GeneToolTip = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

var _Fonts = require("../../../Assets/Fonts");

var _FollowGeneButton = require("../../FollowButton/FollowGeneButton");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

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

var GeneToolTip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GeneToolTip, _React$Component);

  function GeneToolTip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GeneToolTip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GeneToolTip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "trackClick", function () {
      var tracking = _this.props.tracking;
      var href = _this.props.gene.href;
      tracking.trackEvent({
        action: "Click",
        flow: "tooltip",
        type: "gene stub",
        contextModule: "intext tooltip",
        destination_path: href
      });
    });

    return _this;
  }

  _createClass(GeneToolTip, [{
    key: "render",
    value: function render() {
      var _this$props$gene = this.props.gene,
          description = _this$props$gene.description,
          href = _this$props$gene.href,
          id = _this$props$gene.id,
          _id = _this$props$gene._id,
          image = _this$props$gene.image,
          name = _this$props$gene.name;
      var url = image.url;
      var _this$context = this.context,
          genes = _this$context.tooltipsData.genes,
          onOpenAuthModal = _this$context.onOpenAuthModal;
      var trackingData = {
        contextModule: "tooltip",
        entity_id: _id,
        entity_slug: id,
        entity_type: "gene"
      };
      return _react.default.createElement(Wrapper, null, _react.default.createElement(GeneContainer, {
        href: (0, _Constants.getFullArtsyHref)(href),
        target: "_blank",
        onClick: this.trackClick
      }, url && _react.default.createElement(Image, {
        src: url
      }), _react.default.createElement(Title, null, name), description && _react.default.createElement(_Description.ToolTipDescription, {
        text: description
      })), _react.default.createElement(ToolTipFooter, null, _react.default.createElement(_FollowGeneButton.FollowGeneButtonFragmentContainer, {
        gene: genes[id],
        trackingData: trackingData,
        onOpenAuthModal: onOpenAuthModal
      })));
    }
  }]);

  return GeneToolTip;
}(_react.default.Component);

exports.GeneToolTip = GeneToolTip;

_defineProperty(GeneToolTip, "contextTypes", {
  tooltipsData: _propTypes.default.object,
  onOpenAuthModal: _propTypes.default.func
});

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "GeneToolTip__Wrapper",
  componentId: "sc-1432jq7-0"
})(["width:240px;a:hover{color:black;}"]);

var GeneContainer = _styledComponents.default.a.withConfig({
  displayName: "GeneToolTip__GeneContainer",
  componentId: "sc-1432jq7-1"
})(["position:relative;text-decoration:none;color:black;padding-bottom:10px;"]);

exports.GeneContainer = GeneContainer;

var Title = _styledComponents.default.div.withConfig({
  displayName: "GeneToolTip__Title",
  componentId: "sc-1432jq7-2"
})(["", ";font-weight:600;padding-bottom:10px;"], (0, _Fonts.garamond)("s18"));

var Image = _styledComponents.default.img.withConfig({
  displayName: "GeneToolTip__Image",
  componentId: "sc-1432jq7-3"
})(["width:100%;padding-bottom:10px;max-height:160px;object-fit:cover;"]);

var ToolTipFooter = _styledComponents.default.div.withConfig({
  displayName: "GeneToolTip__ToolTipFooter",
  componentId: "sc-1432jq7-4"
})(["display:flex;justify-content:space-between;align-items:center;"]);

exports.ToolTipFooter = ToolTipFooter;
var GeneToolTipContainer = (0, _reactTracking.default)()((0, _reactRelay.createFragmentContainer)(GeneToolTip, {
  gene: function gene() {
    var node = require("../../../__generated__/GeneToolTip_gene.graphql");

    if (node.hash && node.hash !== "e4df0664535bb18b36a35439157de4ce") {
      console.error("The definition of 'GeneToolTip_gene' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/GeneToolTip_gene.graphql");
  }
}));
exports.GeneToolTipContainer = GeneToolTipContainer;
//# sourceMappingURL=GeneToolTip.js.map