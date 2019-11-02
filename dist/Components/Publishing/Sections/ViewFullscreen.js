"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewFullscreen = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconExpand = require("../Icon/IconExpand");

var _withFullScreen = require("../Sections/FullscreenViewer/withFullScreen");

var _dec, _dec2, _class, _class2, _class3, _temp;

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var ViewFullscreen = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)({
  action: "Clicked article impression"
}), _dec(_class = (0, _withFullScreen.withFullScreen)(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewFullscreen, _React$Component);

  function ViewFullscreen(props) {
    var _this;

    _classCallCheck(this, ViewFullscreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewFullscreen).call(this, props));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ViewFullscreen, [{
    key: "onClick",
    value: function onClick(e) {
      e.preventDefault();
      this.props.onViewFullscreen(this.props.index);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(ViewFullscreenLink, {
        onClick: this.onClick
      }, _react.default.createElement(_IconExpand.IconExpand, null));
    }
  }]);

  return ViewFullscreen;
}(_react.default.Component), _defineProperty(_class3, "contextTypes", {
  onViewFullscreen: _propTypes.default.func
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onClick"), _class2.prototype)), _class2)) || _class) || _class);
exports.ViewFullscreen = ViewFullscreen;

var ViewFullscreenLink = _styledComponents.default.div.withConfig({
  displayName: "ViewFullscreen__ViewFullscreenLink",
  componentId: "g6oqwx-0"
})(["position:absolute;bottom:0;right:0;margin:10px;width:25px;height:25px;cursor:pointer;opacity:0.6;transition:opacity 0.3s;&:hover{opacity:1;}"]);
//# sourceMappingURL=ViewFullscreen.js.map