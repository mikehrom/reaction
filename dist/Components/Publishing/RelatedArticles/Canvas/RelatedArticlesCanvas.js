"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelatedArticlesCanvas = void 0;

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

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.function.bind");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../../Helpers");

var _RelatedArticleCanvasLink = require("./RelatedArticleCanvasLink");

var _dec, _dec2, _class, _class2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      &:first-child {\n        margin-left: 20px;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin: 0 10px;\n      &:first-child {\n        margin-left: 40px;\n      }\n      &:last-child {\n        border-right: 20px solid white;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 20px 30px 40px;\n  "]);

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var RelatedArticlesCanvas = (_dec = (0, _Analytics.track)({
  // TODO: re-evalutate double naming of context/schema
  context_module: Schema.ContextModule.FurtherReading,
  subject: Schema.Subject.FurtherReading
}), _dec2 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Impression
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedArticlesCanvas, _React$Component);

  function RelatedArticlesCanvas() {
    _classCallCheck(this, RelatedArticlesCanvas);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelatedArticlesCanvas).apply(this, arguments));
  }

  _createClass(RelatedArticlesCanvas, [{
    key: "trackRelatedImpression",
    value: function trackRelatedImpression() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          articles = _this$props.articles,
          isMobile = _this$props.isMobile,
          vertical = _this$props.vertical;
      return _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        maxWidth: 1250,
        mx: "auto",
        mt: 4,
        mb: 6
      }, getTitle(vertical), _react.default.createElement(_reactWaypoint.default, {
        onEnter: (0, _once2.default)(this.trackRelatedImpression.bind(this))
      }), _react.default.createElement(ArticlesWrapper, {
        isMobile: isMobile
      }, (0, _map2.default)(articles, function (article, i) {
        return _react.default.createElement(_RelatedArticleCanvasLink.RelatedArticleCanvasLink, {
          article: article,
          key: "related-article-figure-".concat(i)
        });
      })));
    }
  }]);

  return RelatedArticlesCanvas;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackRelatedImpression", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackRelatedImpression"), _class2.prototype)), _class2)) || _class);
exports.RelatedArticlesCanvas = RelatedArticlesCanvas;

var getTitle = function getTitle(vertical) {
  if (vertical) {
    return _react.default.createElement(Title, {
      size: ["6", "8"]
    }, "Further reading in ", _react.default.createElement(VerticalSpan, null, vertical.name));
  } else {
    return _react.default.createElement(Title, {
      size: ["6", "8"]
    }, "More from Artsy Editorial");
  }
};

var Title = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "RelatedArticlesCanvas__Title",
  componentId: "sc-1ho76zd-0"
})(["margin-bottom:20px;", ";", ";"], _Helpers.pMedia.xl(_templateObject()), _Helpers.pMedia.sm(_templateObject2()));

var VerticalSpan = _styledComponents.default.span.withConfig({
  displayName: "RelatedArticlesCanvas__VerticalSpan",
  componentId: "sc-1ho76zd-1"
})(["", ";"], _Helpers.pMedia.sm(_templateObject3()));

var ArticlesWrapper = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "RelatedArticlesCanvas__ArticlesWrapper",
  componentId: "sc-1ho76zd-2"
})(["display:flex;justify-content:space-between;overflow-x:scroll;::-webkit-scrollbar{display:none;}a{margin-right:30px;&:last-child{margin-right:0;}", ";", ";}", ";"], _Helpers.pMedia.xl(_templateObject4()), _Helpers.pMedia.sm(_templateObject5()), function (props) {
  return props.isMobile && "-webkit-overflow-scrolling: touch;";
});
//# sourceMappingURL=RelatedArticlesCanvas.js.map