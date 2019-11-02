"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsSectionContainer = exports.NewsSections = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _Helpers = require("../../Helpers");

var _Truncator = require("../../Truncator");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NewsByline = require("../Byline/NewsByline");

var _ImageCollection = require("../Sections/ImageCollection");

var _SocialEmbed = require("../Sections/SocialEmbed");

var _Text = require("../Sections/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: 30px 0 0 0;\n    padding: 0px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 0 15px 0;\n    padding: 0;\n  "]);

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

var NewsSections =
/*#__PURE__*/
function (_Component) {
  _inherits(NewsSections, _Component);

  function NewsSections() {
    _classCallCheck(this, NewsSections);

    return _possibleConstructorReturn(this, _getPrototypeOf(NewsSections).apply(this, arguments));
  }

  _createClass(NewsSections, [{
    key: "getSection",
    value: function getSection(section, index) {
      var _this$props = this.props,
          article = _this$props.article,
          isMobile = _this$props.isMobile,
          isTruncated = _this$props.isTruncated;
      var sections = {
        image_collection: _react.default.createElement(_ImageCollection.ImageCollection, {
          sectionLayout: section.layout,
          articleLayout: article.layout,
          images: section.images,
          targetHeight: 500,
          gutter: 10
        }),
        social_embed: _react.default.createElement(_SocialEmbed.SocialEmbed, {
          section: section
        }),
        text: _react.default.createElement(_Text.Text, {
          html: section.body,
          layout: this.props.article.layout
        }),
        default: false
      };
      var sectionComponent = sections[section.type] || sections.default;

      if (section.type === "text" && isTruncated) {
        return _react.default.createElement(_Truncator.Truncator, {
          maxLineCount: isMobile ? 3 : 2
        }, sectionComponent);
      }

      return sectionComponent;
    }
  }, {
    key: "renderSections",
    value: function renderSections() {
      var _this = this;

      var _this$props2 = this.props,
          sections = _this$props2.article.sections,
          isTruncated = _this$props2.isTruncated;
      var hasMainImage = sections[0].type === "image_collection";
      var limit;

      if (isTruncated) {
        limit = hasMainImage ? 2 : 1;
      } else {
        limit = sections.length;
      }

      var renderedSections = sections.slice(0, limit).map(function (section, index) {
        var child = _this.getSection(section, index);

        if (child) {
          return _react.default.createElement(NewsSectionContainer, {
            key: index,
            type: section.type
          }, child);
        }
      });
      return renderedSections;
    }
  }, {
    key: "renderByline",
    value: function renderByline() {
      var _this$props$article = this.props.article,
          authors = _this$props$article.authors,
          published_at = _this$props$article.published_at;

      if (authors || published_at) {
        return _react.default.createElement(BylineContainer, null, _react.default.createElement(_NewsByline.NewsByline, this.props));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, this.renderSections(), this.renderByline());
    }
  }]);

  return NewsSections;
}(_react.Component);

exports.NewsSections = NewsSections;

var getMaxWidth = function getMaxWidth(type) {
  if (type === "image_collection") {
    return "";
  } else {
    return "max-width: 660px;";
  }
};

var NewsSectionContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsSections__NewsSectionContainer",
  componentId: "sk8dx2-0"
})(["", ";margin-bottom:20px;", ";"], function (props) {
  return getMaxWidth(props.type);
}, _Helpers.pMedia.sm(_templateObject()));

exports.NewsSectionContainer = NewsSectionContainer;

var BylineContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsSections__BylineContainer",
  componentId: "sk8dx2-1"
})(["max-width:780px;margin-top:30px;", ";"], _Helpers.pMedia.sm(_templateObject2()));
//# sourceMappingURL=NewsSections.js.map