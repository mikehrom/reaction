"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesTitleContainer = exports.SeriesTitle = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PartnerBlock = require("../Partner/PartnerBlock");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      padding-bottom: 0;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SeriesTitle = function SeriesTitle(_ref) {
  var article = _ref.article,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "black" : _ref$color,
      editTitle = _ref.editTitle;
  var sponsor = article.sponsor,
      title = article.title;
  return _react.default.createElement(SeriesTitleContainer, {
    color: color
  }, _react.default.createElement(_palette.Sans, {
    size: ["10", "12", "16"],
    element: "h1",
    mb: ["2", "3"]
  }, editTitle ? editTitle : title), sponsor && _react.default.createElement(_PartnerBlock.PartnerBlock, {
    logo: sponsor.partner_light_logo,
    url: sponsor.partner_logo_link,
    trackingData: {
      type: "external link",
      destination_path: sponsor.partner_logo_link
    }
  }));
};

exports.SeriesTitle = SeriesTitle;

var SeriesTitleContainer = _styledComponents.default.div.withConfig({
  displayName: "SeriesTitle__SeriesTitleContainer",
  componentId: "sc-12xoswp-0"
})(["color:", ";text-align:center;", "{padding-top:5px;padding-bottom:40px;img{margin-left:auto;margin-right:auto;}}", ";"], function (props) {
  return props.color;
}, _PartnerBlock.ImageContainer, _palette.media.md(_templateObject(), _PartnerBlock.ImageContainer));

exports.SeriesTitleContainer = SeriesTitleContainer;
//# sourceMappingURL=SeriesTitle.js.map