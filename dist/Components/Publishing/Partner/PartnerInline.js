"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PartnerInline = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _Helpers = require("../../Helpers");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _IconPlus = require("../Icon/IconPlus");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../Utils/resizer");

var _dec, _dec2, _class, _class2, _class3, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    img {\n      max-height: 24px;\n    }\n    ", " {\n      font-size: 24px;\n    }\n    ", " {\n      margin: 0 10px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var PartnerInline = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)(function (props) {
  return {
    action: "Click",
    type: "external_link",
    destination_path: props.url
  };
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PartnerInline, _React$Component);

  function PartnerInline() {
    _classCallCheck(this, PartnerInline);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartnerInline).apply(this, arguments));
  }

  _createClass(PartnerInline, [{
    key: "onPartnerClick",
    value: function onPartnerClick(event) {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          logo = _this$props.logo,
          url = _this$props.url,
          margin = _this$props.margin;
      var resized_logo = logo ? (0, _resizer.resize)(logo, {
        width: 240
      }) : "";
      return _react.default.createElement(PartnerInlineContainer, {
        margin: margin,
        className: "PartnerInline"
      }, _react.default.createElement("a", {
        href: "/"
      }, _react.default.createElement(_Icon.default, {
        name: "logo",
        color: color ? color : "black",
        fontSize: "32px"
      })), resized_logo && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_IconPlus.IconPlus, {
        color: color
      }), _react.default.createElement("a", {
        href: url,
        target: "_blank",
        onClick: this.onPartnerClick.bind(this)
      }, _react.default.createElement("img", {
        src: resized_logo
      }))));
    }
  }]);

  return PartnerInline;
}(_react.default.Component), _defineProperty(_class3, "defaultProps", {
  margin: "0px"
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onPartnerClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onPartnerClick"), _class2.prototype)), _class2)) || _class);
exports.PartnerInline = PartnerInline;

var PartnerInlineContainer = _styledComponents.default.div.withConfig({
  displayName: "PartnerInline__PartnerInlineContainer",
  componentId: "soorph-0"
})(["z-index:1;display:flex;align-items:center;margin:", ";img{max-height:34px;vertical-align:middle;-ms-interpolation-mode:bicubic;}", "{margin:0 20px;}", "{margin:0;vertical-align:middle;}", ";"], function (props) {
  return props.margin;
}, _IconPlus.IconPlus, _Icon.default, _Helpers.pMedia.sm(_templateObject(), _Icon.default, _IconPlus.IconPlus));
//# sourceMappingURL=PartnerInline.js.map