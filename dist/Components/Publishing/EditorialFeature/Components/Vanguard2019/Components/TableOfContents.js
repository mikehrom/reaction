"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesContainer = exports.TocSvgs = exports.VanguardTableOfContents = void 0;

require("core-js/modules/es6.array.map");

var _times2 = _interopRequireDefault(require("lodash/times"));

var _palette = require("@artsy/palette");

var _Emerging = require("../Blobs/Emerging");

var _GettingTheirDue = require("../Blobs/GettingTheirDue");

var _NewlyEstablished = require("../Blobs/NewlyEstablished");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _underscore = require("underscore.string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VanguardTableOfContents = function VanguardTableOfContents(props) {
  var relatedArticles = props.article.relatedArticles,
      onChangeSection = props.onChangeSection;
  return _react.default.createElement(_palette.Box, {
    pb: 100,
    textAlign: "center",
    minHeight: "70vh",
    background: (0, _palette.color)("white100")
  }, _react.default.createElement(_palette.Sans, {
    size: ["8", "12", "14", "16"],
    mb: 4
  }, "Table of Contents"), relatedArticles && relatedArticles.map(function (subSeries, i) {
    var subSeriesSlug = (0, _underscore.slugify)(subSeries.title);
    return _react.default.createElement(SeriesContainer, {
      key: i,
      onClick: function onClick() {
        return onChangeSection(subSeriesSlug);
      }
    }, _react.default.createElement(SvgContainer, null, TocSvgs(subSeriesSlug)), _react.default.createElement(Chapter, null, _react.default.createElement(_palette.Serif, {
      size: ["8", "10", "12", "12"],
      pb: 2,
      maxWidth: 1000,
      mx: "auto"
    }, (0, _times2.default)(i + 1, function () {
      return "I";
    })), _react.default.createElement(SeriesTitle, {
      size: ["8", "10", "12", "14"],
      pb: 2,
      maxWidth: 1000,
      mx: "auto"
    }, subSeries.title)));
  }));
};

exports.VanguardTableOfContents = VanguardTableOfContents;

var TocSvgs = function TocSvgs(type) {
  switch (type) {
    case "emerging":
      return _react.default.createElement(_Emerging.Emerging1, null);

    case "newly-established":
      return _react.default.createElement(_NewlyEstablished.NewlyEstablished1, null);

    case "getting-their-due":
      return _react.default.createElement(_GettingTheirDue.GettingTheirDue1, null);
  }
};

exports.TocSvgs = TocSvgs;
var Chapter = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "TableOfContents__Chapter",
  componentId: "sc-1uqls89-0"
})(["position:relative;"]);
var SvgContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "TableOfContents__SvgContainer",
  componentId: "sc-1uqls89-1"
})(["position:absolute;left:0;top:-50%;right:0;bottom:auto;display:none;"]);
var SeriesTitle = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "TableOfContents__SeriesTitle",
  componentId: "sc-1uqls89-2"
})(["text-transform:uppercase;"]);
var SeriesContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "TableOfContents__SeriesContainer",
  componentId: "sc-1uqls89-3"
})(["position:relative;&:hover{", "{display:block;}", "{color:white;cursor:pointer;}}"], SvgContainer, Chapter);
exports.SeriesContainer = SeriesContainer;
//# sourceMappingURL=TableOfContents.js.map