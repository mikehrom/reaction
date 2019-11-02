"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTipContainer = exports.ToolTip = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtistToolTip = require("./ArtistToolTip");

var _Arrow = require("./Components/Arrow");

var _GeneToolTip = require("./GeneToolTip");

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

var ToolTip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToolTip, _React$Component);

  function ToolTip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToolTip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToolTip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getToolTip", function () {
      var _this$props = _this.props,
          entity = _this$props.entity,
          model = _this$props.model;

      switch (model) {
        case "artist":
          {
            return _react.default.createElement(_ArtistToolTip.ArtistTooltipContainer, {
              artist: entity
            });
          }

        case "gene":
          {
            return _react.default.createElement(_GeneToolTip.GeneToolTipContainer, {
              gene: entity
            });
          }

        default:
          {
            return null;
          }
      }
    });

    return _this;
  }

  _createClass(ToolTip, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          arrowLeft = _this$props2.arrowLeft,
          entity = _this$props2.entity,
          orientation = _this$props2.orientation,
          onMouseEnter = _this$props2.onMouseEnter,
          onMouseLeave = _this$props2.onMouseLeave,
          positionLeft = _this$props2.positionLeft;
      if (!entity) return null;
      return _react.default.createElement(ToolTipContainer, {
        orientation: orientation,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        positionLeft: positionLeft
      }, _react.default.createElement(Content, {
        orientation: orientation,
        arrowLeft: arrowLeft
      }, orientation === "down" && // point up from below content
      _react.default.createElement(_Arrow.Arrow, {
        orientation: "up"
      }), this.getToolTip(), orientation === "up" && // point down from above content
      _react.default.createElement(_Arrow.Arrow, {
        orientation: "down"
      })));
    }
  }]);

  return ToolTip;
}(_react.default.Component);

exports.ToolTip = ToolTip;

var ToolTipContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ToolTip__ToolTipContainer",
  componentId: "sc-19sn0g5-0"
})(["position:absolute;color:", ";z-index:10;left:", "px;", ";"], (0, _palette.color)("black100"), function (props) {
  return props.positionLeft ? props.positionLeft : 0;
}, function (props) {
  return props.orientation === "up" ? "bottom: 95%;" : "top: calc(100% + 10px);";
});

exports.ToolTipContainer = ToolTipContainer;

var Content = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ToolTip__Content",
  componentId: "sc-19sn0g5-1"
})(["box-shadow:0 0 10px 0 rgba(0,0,0,0.15);padding:20px;background:white;margin-bottom:15px;width:fit-content;color:inherit;a{background-image:none;}", "{left:", ";", ";}"], _Arrow.ArrowContainer, function (props) {
  return props.arrowLeft ? "".concat(props.arrowLeft, "px") : "calc(50% - 15px)";
}, function (props) {
  return props.orientation === "down" ? "top: -35px;" : "bottom: -15px;";
});
//# sourceMappingURL=ToolTip.js.map