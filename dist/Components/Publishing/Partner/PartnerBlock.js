"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageContainer = exports.PartnerBlockContainer = exports.PartnerBlock = void 0;

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

var _Fonts = require("../../../Assets/Fonts");

var _Helpers = require("../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../Utils/resizer");

var _dec, _dec2, _class, _class2, _class3, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

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

var PartnerBlock = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)(function (props) {
  return {
    action: "Click",
    type: "external_link",
    destination_path: props.url
  };
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PartnerBlock, _React$Component);

  function PartnerBlock() {
    _classCallCheck(this, PartnerBlock);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartnerBlock).apply(this, arguments));
  }

  _createClass(PartnerBlock, [{
    key: "onPartnerClick",
    value: function onPartnerClick(event) {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logo = _this$props.logo,
          url = _this$props.url;
      var resized_logo = (0, _resizer.resize)(logo, {
        width: 240
      });

      var image = _react.default.createElement("img", {
        src: resized_logo
      });

      return _react.default.createElement(PartnerBlockContainer, {
        className: "PartnerBlock"
      }, logo && _react.default.createElement(Title, null, "Presented in Partnership with"), image && _react.default.createElement(ImageContainer, null, url ? _react.default.createElement("a", {
        href: url,
        target: "_blank",
        onClick: this.onPartnerClick.bind(this)
      }, image) : image));
    }
  }]);

  return PartnerBlock;
}(_react.default.Component), _defineProperty(_class3, "defaultProps", {}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onPartnerClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onPartnerClick"), _class2.prototype)), _class2)) || _class);
exports.PartnerBlock = PartnerBlock;

var PartnerBlockContainer = _styledComponents.default.div.withConfig({
  displayName: "PartnerBlock__PartnerBlockContainer",
  componentId: "ydgi2-0"
})(["display:block;"]);

exports.PartnerBlockContainer = PartnerBlockContainer;

var ImageContainer = _styledComponents.default.div.withConfig({
  displayName: "PartnerBlock__ImageContainer",
  componentId: "ydgi2-1"
})(["img{max-width:240px;max-height:40px;object-fit:contain;object-position:left;}"]);

exports.ImageContainer = ImageContainer;

var Title = _styledComponents.default.div.withConfig({
  displayName: "PartnerBlock__Title",
  componentId: "ydgi2-2"
})(["", ";margin-bottom:20px;", ";"], (0, _Fonts.unica)("s16", "medium"), _Helpers.pMedia.sm(_templateObject(), (0, _Fonts.unica)("s14", "medium")));
//# sourceMappingURL=PartnerBlock.js.map