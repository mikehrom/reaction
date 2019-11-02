"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareDate = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../Helpers");

var _Constants = require("../Constants");

var _Date = require("./Date");

var _Share = require("./Share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      margin-top: 0px;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ShareDateComponent = function ShareDateComponent(props) {
  var article = props.article,
      color = props.color;
  var title = article.social_title || article.thumbnail_title;
  return _react.default.createElement("div", {
    className: props.className
  }, _react.default.createElement(_Date.Date, {
    date: article.published_at
  }), _react.default.createElement(_Share.Share, {
    url: (0, _Constants.getFullEditorialHref)(article.layout, article.slug),
    title: title,
    color: color,
    hasLabel: true
  }));
};

ShareDateComponent.defaultProps = {
  color: "black"
};
var ShareDate = (0, _styledComponents.default)(ShareDateComponent).withConfig({
  displayName: "ShareDate",
  componentId: "fw8vq2-0"
})(["color:", ";", ";"], function (props) {
  return props.color || "black";
}, _Helpers.media.sm(_templateObject(), _Share.ShareContainer));
exports.ShareDate = ShareDate;
//# sourceMappingURL=ShareDate.js.map