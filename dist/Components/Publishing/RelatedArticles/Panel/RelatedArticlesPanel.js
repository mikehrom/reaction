"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelatedArticlesPanel = void 0;

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

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.bind");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _RelatedArticlesPanelLink = require("./RelatedArticlesPanelLink");

var _dec, _dec2, _class, _class2, _class3, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var RelatedArticlesPanel = (_dec = (0, _Analytics.track)({
  // TODO: reevalutate double naming of context/schema
  context_module: Schema.ContextModule.RelatedArticles,
  subject: Schema.Subject.RelatedArticles
}), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.Impression
  };
}), _dec(_class = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedArticlesPanel, _React$Component);

  function RelatedArticlesPanel() {
    _classCallCheck(this, RelatedArticlesPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelatedArticlesPanel).apply(this, arguments));
  }

  _createClass(RelatedArticlesPanel, [{
    key: "trackRelatedImpression",
    value: function trackRelatedImpression() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          articles = _this$props.articles,
          label = _this$props.label;
      return _react.default.createElement(RelatedArticlesContainer, null, _react.default.createElement(Label, {
        size: "3t",
        weight: "medium"
      }, label), _react.default.createElement(_reactWaypoint.default, {
        onEnter: (0, _once2.default)(this.trackRelatedImpression.bind(this))
      }), _react.default.createElement(Collection, null, articles.map(function (article, i) {
        return _react.default.createElement(_RelatedArticlesPanelLink.RelatedArticlesPanelLink, {
          article: article,
          key: "relatedArticles-".concat(i)
        });
      })));
    }
  }]);

  return RelatedArticlesPanel;
}(_react.default.Component), _defineProperty(_class3, "defaultProps", {
  label: "Related Stories"
}), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackRelatedImpression", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackRelatedImpression"), _class2.prototype)), _class2)) || _class);
exports.RelatedArticlesPanel = RelatedArticlesPanel;

var RelatedArticlesContainer = _styledComponents.default.div.withConfig({
  displayName: "RelatedArticlesPanel__RelatedArticlesContainer",
  componentId: "ov3i45-0"
})(["max-width:360px;"]);

var Collection = _styledComponents.default.div.withConfig({
  displayName: "RelatedArticlesPanel__Collection",
  componentId: "ov3i45-1"
})(["display:flex;flex-direction:column;"]);

var Label = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "RelatedArticlesPanel__Label",
  componentId: "ov3i45-2"
})(["margin-bottom:10px;"]);
//# sourceMappingURL=RelatedArticlesPanel.js.map