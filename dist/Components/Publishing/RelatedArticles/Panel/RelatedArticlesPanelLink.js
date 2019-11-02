"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleLink = exports.RelatedArticlesPanelLink = void 0;

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

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../Utils/resizer");

var _Constants = require("../../Constants");

var _dec, _dec2, _class, _class2, _class3, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var RelatedArticlesPanelLink = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.Click,
    destination_path: (0, _Constants.getEditorialHref)(props.article.layout, props.article.slug),
    // TODO: add type to schema
    type: "thumbnail"
  };
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedArticlesPanelLink, _React$Component);

  function RelatedArticlesPanelLink() {
    _classCallCheck(this, RelatedArticlesPanelLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelatedArticlesPanelLink).apply(this, arguments));
  }

  _createClass(RelatedArticlesPanelLink, [{
    key: "onClick",
    value: function onClick(e) {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var article = this.props.article;
      var href = (0, _Constants.getEditorialHref)(article.layout, article.slug);
      var articleImageSrc = (0, _resizer.crop)(article.thumbnail_image, {
        width: 160,
        height: 110
      });
      return _react.default.createElement(ArticleLink, {
        href: href,
        onClick: this.onClick.bind(this)
      }, _react.default.createElement(ArticleImage, {
        src: articleImageSrc
      }), _react.default.createElement(_palette.Serif, {
        size: "4t",
        color: (0, _palette.color)("black100")
      }, article.thumbnail_title));
    }
  }]);

  return RelatedArticlesPanelLink;
}(_react.default.Component), _defineProperty(_class3, "defaultProps", {
  label: "Related Stories"
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onClick"), _class2.prototype)), _class2)) || _class);
exports.RelatedArticlesPanelLink = RelatedArticlesPanelLink;

var ArticleLink = _styledComponents.default.a.withConfig({
  displayName: "RelatedArticlesPanelLink__ArticleLink",
  componentId: "sc-1gcgwm7-0"
})(["text-decoration:none;display:flex;justify-content:left;margin-bottom:", "px;"], (0, _palette.space)(2));

exports.ArticleLink = ArticleLink;

var ArticleImage = _styledComponents.default.img.withConfig({
  displayName: "RelatedArticlesPanelLink__ArticleImage",
  componentId: "sc-1gcgwm7-1"
})(["min-width:80px;height:55px;margin-right:", "px;"], (0, _palette.space)(1));
//# sourceMappingURL=RelatedArticlesPanelLink.js.map