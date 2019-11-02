"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateSource = void 0;

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

require("core-js/modules/es6.date.to-iso-string");

require("core-js/modules/es6.function.bind");

var _Fonts = require("../../../Assets/Fonts");

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _Helpers = require("../../Helpers");

var _Constants = require("../Constants");

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var DateSource = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)(function (props) {
  return {
    action: "Click",
    type: "external link",
    label: "news source",
    destination_path: props.article.news_source.url
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(DateSource, _Component);

  function DateSource(props) {
    var _this;

    _classCallCheck(this, DateSource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateSource).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getNewsSource", function (source) {
      var editSource = _this.props.editSource;
      var hasSource = source && (source.url || source.title);
      if (!editSource && !hasSource) return null;
      return _react.default.createElement(_react.Fragment, null, hasSource && ", via", "\xA0", editSource ? editSource : source.url ? _react.default.createElement("a", {
        href: source.url,
        target: "_blank",
        onClick: _this.onClick
      }, source.title) : source.title);
    });

    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DateSource, [{
    key: "onClick",
    value: function onClick() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$article = this.props.article,
          news_source = _this$props$article.news_source,
          published_at = _this$props$article.published_at;
      return _react.default.createElement(DateSourceContainer, null, (0, _Constants.getDate)(published_at || new Date().toISOString(), "verbose"), this.getNewsSource(news_source));
    }
  }]);

  return DateSource;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onClick"), _class2.prototype)), _class2)) || _class);
exports.DateSource = DateSource;

var DateSourceContainer = _styledComponents.default.div.withConfig({
  displayName: "DateSource__DateSourceContainer",
  componentId: "sc-70vwl7-0"
})(["display:flex;", ";", " a{color:", ";}color:", ";"], (0, _Fonts.unica)("s14"), _Helpers.pMedia.sm(_templateObject(), (0, _Fonts.unica)("s12")), _Colors.default.grayDark, _Colors.default.grayDark);
//# sourceMappingURL=DateSource.js.map