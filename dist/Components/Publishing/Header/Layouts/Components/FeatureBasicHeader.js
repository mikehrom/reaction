"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicHeaderContainer = exports.VideoContainer = exports.FeatureBasicHeader = void 0;

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

var _palette = require("@artsy/palette");

var _Helpers = require("../../../../Helpers");

var _Byline = require("../../../Byline/Byline");

var _Share = require("../../../Byline/Share");

var _Video = require("../../../Sections/Video");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FeatureHeader = require("../FeatureHeader");

var _FeatureInnerContent = require("./FeatureInnerContent");

var _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      flex-direction: column;\n      align-items: center;\n\n      div {\n        padding-right: 0;\n        margin-right: 0;\n      }\n\n      ", " {\n        margin-top: ", "px;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: 15px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n      margin-top: 25px;\n      margin-bottom: -25px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n    "]);

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var FeatureBasicHeader = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)(function (props) {
  return {
    action: "Click",
    label: "Basic feature video click",
    impression_type: "sa_basic_feature_video",
    context_type: "article_fixed"
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FeatureBasicHeader, _React$Component);

  function FeatureBasicHeader(props) {
    var _this;

    _classCallCheck(this, FeatureBasicHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeatureBasicHeader).call(this, props));
    _this.trackVideoPlay = _this.trackVideoPlay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FeatureBasicHeader, [{
    key: "trackVideoPlay",
    value: function trackVideoPlay() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hero_section = _this$props.article.hero_section,
          editImage = _this$props.editImage;
      var url = hero_section.url;
      var hasVideo = (0, _Video.getPlayerUrl)({
        hostname: url
      }) ? true : false;
      return _react.default.createElement(BasicHeaderContainer, {
        hasVideo: hasVideo
      }, editImage && _react.default.createElement(_FeatureHeader.EditImage, null, editImage), hasVideo && _react.default.createElement(VideoContainer, {
        onClick: this.trackVideoPlay
      }, _react.default.createElement(_Video.Video, {
        section: hero_section,
        layout: "feature"
      })), _react.default.createElement(_FeatureInnerContent.FeatureInnerContent, this.props));
    }
  }]);

  return FeatureBasicHeader;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackVideoPlay", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackVideoPlay"), _class2.prototype)), _class2)) || _class);
exports.FeatureBasicHeader = FeatureBasicHeader;

var VideoContainer = _styledComponents.default.div.withConfig({
  displayName: "FeatureBasicHeader__VideoContainer",
  componentId: "ijo2ot-0"
})(["width:100%;"]);

exports.VideoContainer = VideoContainer;

var BasicHeaderContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "FeatureBasicHeader__BasicHeaderContainer",
  componentId: "ijo2ot-1"
})(["text-align:center;margin-top:", "px;padding:", "px;position:relative;", ",", "{width:100%;@media screen and (min-width:1250px){height:", "px;}", " ", " ", " ", " ", "}", "{max-width:1250px;margin:0 auto ", "px auto;", "}", "{max-width:680px;flex-direction:column;margin:auto;align-items:center;}", "{padding-right:0;margin-right:0;padding-bottom:", "px;max-width:100%;}", "{justify-content:center;div{padding-right:", "px;}", "{padding-right:0;}", "}"], function (props) {
  return props.hasVideo ? "30" : "70";
}, (0, _palette.space)(2), _Video.CoverImage, _Video.IFrame, 1100 * _Video.VIDEO_RATIO, _Helpers.pMedia.xl(_templateObject(), 1100 * _Video.VIDEO_RATIO), _Helpers.pMedia.lg(_templateObject2(), 950 * _Video.VIDEO_RATIO), _Helpers.pMedia.md(_templateObject3(), 800 * _Video.VIDEO_RATIO), _Helpers.pMedia.sm(_templateObject4(), 620 * _Video.VIDEO_RATIO), _Helpers.pMedia.xs(_templateObject5(), 340 * _Video.VIDEO_RATIO), _FeatureInnerContent.Title, (0, _palette.space)(3), _Helpers.pMedia.xs(_templateObject6()), _FeatureInnerContent.SubContentContainer, _FeatureInnerContent.Deck, (0, _palette.space)(1), _Byline.BylineContainer, (0, _palette.space)(3), _Share.ShareContainer, _Helpers.pMedia.xs(_templateObject7(), _Share.ShareContainer, (0, _palette.space)(1)));

exports.BasicHeaderContainer = BasicHeaderContainer;
//# sourceMappingURL=FeatureBasicHeader.js.map