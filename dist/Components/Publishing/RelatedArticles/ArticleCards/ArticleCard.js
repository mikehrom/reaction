"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleCardContainer = exports.ArticleCardImageContainer = exports.ArticleCard = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.date.to-iso-string");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.values");

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../../Helpers");

var _Byline = require("../../Byline/Byline");

var _Date = require("../../Byline/Date");

var _Constants = require("../../Constants");

var _IconVideoPlay = require("../../Icon/IconVideoPlay");

var _resizer = require("../../../../Utils/resizer");

var _dec, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    svg {\n      height: 30px;\n    }\n  "]);

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

var ArticleCard = (_dec = (0, _reactTracking.default)(), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ArticleCard, _Component);

  function ArticleCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArticleCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArticleCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isUnpublishedMedia", function () {
      var article = _this.props.article;
      return article.layout === "video" && article.media && !article.media.published;
    });

    _defineProperty(_assertThisInitialized(_this), "isEditing", function () {
      var _this$props = _this.props,
          editDate = _this$props.editDate,
          editDescription = _this$props.editDescription,
          editImage = _this$props.editImage,
          editTitle = _this$props.editTitle,
          editing = _this$props.editing;
      return editing || editDate || editDescription || editImage || editTitle;
    });

    _defineProperty(_assertThisInitialized(_this), "renderDate", function () {
      var _this$props2 = _this.props,
          article = _this$props2.article,
          editDate = _this$props2.editDate;
      var hasMedia = article.media && (0, _compact2.default)(Object.values(article.media)).length;

      if (editDate) {
        return _react.default.createElement(_palette.Sans, {
          size: "3t",
          weight: "medium"
        }, editDate);
      } else if (hasMedia) {
        return _this.renderMediaDate();
      } else {
        return _react.default.createElement(_Byline.Byline, {
          article: article,
          color: _this.props.color,
          size: "3t",
          layout: "condensed"
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMediaDate", function () {
      var article = _this.props.article;
      var mediaDate = (0, _Constants.getMediaDate)(article);
      var date = article.layout === "video" ? mediaDate : article.published_at;
      var formatedDate = new Date(date).toISOString();

      if (_this.isUnpublishedMedia()) {
        return _react.default.createElement(_palette.Sans, {
          size: "3t",
          weight: "medium"
        }, _react.default.createElement(_palette.Flex, {
          alignItems: "flex-end"
        }, _react.default.createElement(_palette.Box, {
          mr: "5px"
        }, "Available"), _react.default.createElement(_Date.Date, {
          format: "monthYear",
          date: mediaDate
        })));
      } else {
        return _react.default.createElement(_Date.Date, {
          layout: "condensed",
          size: "3t",
          date: formatedDate
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMediaCoverInfo", function () {
      var article = _this.props.article;

      if (_this.isUnpublishedMedia()) {
        return _react.default.createElement(MediaContainer, null, _react.default.createElement(_palette.Sans, {
          size: ["8", "8", "10", "10"]
        }, "Coming Soon"));
      } else {
        return _react.default.createElement(MediaContainer, {
          justifyContent: "space-between",
          alignItems: "flex-end"
        }, _react.default.createElement(_IconVideoPlay.IconVideoPlay, {
          color: _this.props.color
        }), _react.default.createElement(_palette.Sans, {
          size: "3t",
          weight: "medium",
          lineHeight: "1em"
        }, (0, _Constants.formatTime)(article.media.duration)));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openLink", function (e) {
      e.preventDefault();

      if (!_this.isUnpublishedMedia() && !_this.isEditing()) {
        window.open(e.currentTarget.attributes.href.value);
      }

      _this.props.tracking.trackEvent({
        action: "Click",
        label: "Related article card"
      });
    });

    return _this;
  }

  _createClass(ArticleCard, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          article = _this$props3.article,
          editDescription = _this$props3.editDescription,
          editImage = _this$props3.editImage,
          editTitle = _this$props3.editTitle,
          series = _this$props3.series;
      var layout = article.layout;
      var isUnpublishedMedia = this.isUnpublishedMedia();
      var description = editDescription ? editDescription : article.description;
      var title = editTitle ? editTitle : article.thumbnail_title || article.title;
      return _react.default.createElement(ArticleCardContainer, {
        href: isUnpublishedMedia ? "" : article.slug,
        color: this.props.color,
        className: "ArticleCard",
        published: !isUnpublishedMedia,
        onClick: this.openLink
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: ["column-reverse", "column-reverse", "row", "row"],
        p: [20, 20, 30, 30]
      }, _react.default.createElement(_palette.Flex, {
        width: ["100%", "100%", "50%", "50%"],
        mb: [0, 0, "5px", "5px"],
        flexDirection: "column",
        justifyContent: "space-between"
      }, _react.default.createElement("div", null, series && _react.default.createElement(_palette.Sans, {
        size: "3t",
        weight: "medium",
        mb: 1
      }, series.title), _react.default.createElement(_palette.Sans, {
        size: ["8", "8", "10", "10"],
        mb: 20
      }, title), _react.default.createElement(_palette.Serif, {
        size: ["4", "4", "5", "5"],
        mb: 20
      }, description)), this.renderDate()), _react.default.createElement(ArticleCardImageContainer, {
        width: ["100%", "100%", "50%", "50%"],
        ml: [0, 0, 30, 30],
        mb: [10, 10, 0, 0]
      }, editImage ? editImage : _react.default.createElement(Image, {
        src: (0, _resizer.crop)(article.thumbnail_image, {
          width: 680,
          height: 450
        })
      }), article.media && layout === "video" && this.renderMediaCoverInfo())));
    }
  }]);

  return ArticleCard;
}(_react.Component), _defineProperty(_class2, "defaultProps", void 0), _temp)) || _class);
exports.ArticleCard = ArticleCard;
ArticleCard.defaultProps = {
  color: (0, _palette.color)("black100")
};

var Image = _styledComponents.default.img.withConfig({
  displayName: "ArticleCard__Image",
  componentId: "nqsvxw-0"
})(["width:100%;height:100%;object-fit:cover;object-position:center;transition:opacity 0.15s;display:block;"]);

var ArticleCardImageContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArticleCard__ArticleCardImageContainer",
  componentId: "nqsvxw-1"
})(["position:relative;height:inherit;background:white;"]);
exports.ArticleCardImageContainer = ArticleCardImageContainer;

var ArticleCardContainer = _styledComponents.default.a.withConfig({
  displayName: "ArticleCard__ArticleCardContainer",
  componentId: "nqsvxw-2"
})(["border:1px solid;border-radius:2px;color:", ";cursor:", ";text-decoration:none;display:block;", "{opacity:", ";}&:hover{", "{opacity:0.7;}}"], function (props) {
  return props.color;
}, function (props) {
  return props.published ? "pointer" : "default";
}, Image, function (props) {
  return props.published ? "1" : "0.7";
}, Image);

exports.ArticleCardContainer = ArticleCardContainer;
var MediaContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArticleCard__MediaContainer",
  componentId: "nqsvxw-3"
})(["position:absolute;left:20px;right:20px;bottom:20px;svg{height:40px;}", ";"], _Helpers.media.md(_templateObject()));
//# sourceMappingURL=ArticleCard.js.map