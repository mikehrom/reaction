"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperWithFullscreenContext = exports.FullscreenViewerContextTypes = exports.FullscreenViewerContext = exports.wrapperWithContext = exports.TextFromArticle = exports.EditableChild = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _map2 = _interopRequireDefault(require("lodash/map"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

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

var EditableChild = function EditableChild(type) {
  return _react.default.createElement("div", null, "Child ", type);
};

exports.EditableChild = EditableChild;

var TextFromArticle = function TextFromArticle(article) {
  return (0, _compact2.default)((0, _map2.default)(article.sections, "body")).join("");
};

exports.TextFromArticle = TextFromArticle;

var wrapperWithContext = function wrapperWithContext(context, contextTypes, children) {
  var _class, _temp;

  return _react.default.createElement((_temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "getChildContext",
      value: function getChildContext() {
        return context;
      }
    }, {
      key: "render",
      value: function render() {
        return children;
      }
    }]);

    return _class;
  }(_react.default.Component), _defineProperty(_class, "childContextTypes", contextTypes), _temp));
};

exports.wrapperWithContext = wrapperWithContext;
var FullscreenViewerContext = {
  onViewFullscreen: function onViewFullscreen(x) {
    return x;
  },
  openViewer: function openViewer(x) {
    return x;
  },
  closeViewer: function closeViewer(x) {
    return x;
  },
  slideIndex: 0,
  viewerIsOpen: false
};
exports.FullscreenViewerContext = FullscreenViewerContext;
var FullscreenViewerContextTypes = {
  onViewFullscreen: _propTypes.default.func,
  openViewer: _propTypes.default.func,
  closeViewer: _propTypes.default.func,
  slideIndex: _propTypes.default.number,
  viewerIsOpen: _propTypes.default.bool
};
exports.FullscreenViewerContextTypes = FullscreenViewerContextTypes;

var WrapperWithFullscreenContext = function WrapperWithFullscreenContext(children) {
  return wrapperWithContext(FullscreenViewerContext, FullscreenViewerContextTypes, children);
};

exports.WrapperWithFullscreenContext = WrapperWithFullscreenContext;
//# sourceMappingURL=Helpers.js.map