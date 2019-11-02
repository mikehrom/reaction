"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Eoy2018ArticleHeader = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.array.map");

var _map2 = _interopRequireDefault(require("lodash/map"));

var _flatten2 = _interopRequireDefault(require("lodash/flatten"));

var _palette = require("@artsy/palette");

var _Fonts = require("../../../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _resizer = require("../../../../../Utils/resizer");

var _Responsive = require("../../../../../Utils/Responsive");

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

var Eoy2018ArticleHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Eoy2018ArticleHeader, _React$Component);

  function Eoy2018ArticleHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Eoy2018ArticleHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Eoy2018ArticleHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getImageUrls", function (gridSize) {
      var bgImages = (0, _map2.default)((0, _flatten2.default)(_this.props.images), "url");
      var resizedImages = bgImages.map(function (url) {
        return (0, _resizer.resize)(url, {
          width: 300
        });
      });
      var urls = [];
      var i = 0;

      for (i; i < gridSize;) {
        var bgIndex = Math.floor(Math.random() * Math.floor(resizedImages.length));

        if (!urls.includes(resizedImages[bgIndex])) {
          urls.push(resizedImages[bgIndex]);
          i = i + 1;
        }
      }

      return urls;
    });

    _defineProperty(_assertThisInitialized(_this), "imagesGrid", function (gridSize) {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          isTablet = _this$props.isTablet,
          isTest = _this$props.isTest;

      var imageUrls = _this.getImageUrls(gridSize);

      if (isTest) {
        // hide random elements in tests
        return;
      }

      return imageUrls.map(function (src, i) {
        var isMobileItem = isMobile && (i === 5 || i === 6);
        var isTabletItem = isTablet && [2, 3, 9].includes(i);
        var isVisible = isMobileItem || isTabletItem;
        return _react.default.createElement(GridItem, {
          key: i,
          width: [1 / 2, 1 / 3, 1 / 4],
          isVisible: isVisible
        }, _react.default.createElement(Img, {
          src: src
        }));
      });
    });

    return _this;
  }

  _createClass(Eoy2018ArticleHeader, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(ArticleHeader, null, _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(HeaderGrid, {
        flexWrap: "wrap"
      }, this.imagesGrid(8))), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(HeaderGrid, {
        flexWrap: "wrap"
      }, this.imagesGrid(12))), _react.default.createElement(Title, null, _react.default.createElement(TitleBlock, null, "The Most "), _react.default.createElement(TitleBlock, {
        textAlign: "right"
      }, "Influential "), _react.default.createElement(_Responsive.Media, {
        lessThan: "md"
      }, _react.default.createElement(TitleBlock, null, "Artists")), _react.default.createElement(_Responsive.Media, {
        lessThan: "md"
      }, _react.default.createElement(TitleBlock, {
        textAlign: "right"
      }, " of 2018")), _react.default.createElement(_Responsive.Media, {
        greaterThan: "sm"
      }, _react.default.createElement(TitleBlock, null, "Artists of 2018"))));
    }
  }]);

  return Eoy2018ArticleHeader;
}(_react.default.Component);

exports.Eoy2018ArticleHeader = Eoy2018ArticleHeader;
var HeaderGrid = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArticleHeader__HeaderGrid",
  componentId: "pbffir-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;"]);

var Img = _styledComponents.default.div.withConfig({
  displayName: "ArticleHeader__Img",
  componentId: "pbffir-1"
})(["width:100%;height:100%;opacity:0;transition:opacity 0.5s;", ";"], function (_ref) {
  var src = _ref.src;
  return src && "\n    background: url(".concat(src, ");\n    background-size: cover;\n    background-position: 50%;\n    mix-blend-mode: screen;\n    filter: grayscale(100%);\n  ");
});

var GridItem = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArticleHeader__GridItem",
  componentId: "pbffir-2"
})(["border:3px solid ", ";transition:background-color 0.5s;", "{", ";}&:hover{background-color:", ";", "{opacity:1;}}", ";"], (0, _palette.color)("purple100"), Img, function (props) {
  return props.isVisible && "\n    opacity: 1;\n    ";
}, (0, _palette.color)("purple100"), Img, function (props) {
  return props.isVisible && "\n    background-color: ".concat((0, _palette.color)("purple100"), ";\n  ");
});

var ArticleHeader = _styledComponents.default.div.withConfig({
  displayName: "ArticleHeader",
  componentId: "pbffir-3"
})(["height:90vh;max-height:1000px;border:3px solid ", ";display:flex;align-items:center;position:relative;overflow:hidden;"], (0, _palette.color)("purple100"));

var Title = _styledComponents.default.h1.withConfig({
  displayName: "ArticleHeader__Title",
  componentId: "pbffir-4"
})(["min-height:100%;min-width:100%;padding:20px;display:flex;flex-direction:column;justify-content:space-between;margin:0;", ";font-weight:inherit;"], (0, _Fonts.unica)("s100")); // Font size is responsive to pagewidth with max/min sizes
// font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])))


var TitleBlock = _styledComponents.default.span.withConfig({
  displayName: "ArticleHeader__TitleBlock",
  componentId: "pbffir-5"
})(["display:block;font-size:calc(80px + (200 - 80) * ((100vw - 300px) / (1600 - 300)));line-height:initial;", ";"], _styledSystem.textAlign);
//# sourceMappingURL=ArticleHeader.js.map