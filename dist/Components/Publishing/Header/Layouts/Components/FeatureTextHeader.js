"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureTextAsset = exports.FeatureTextHeader = void 0;

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../../Utils/resizer");

var _FeatureHeader = require("../FeatureHeader");

var _FeatureInnerContent = require("./FeatureInnerContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureTextHeader = function FeatureTextHeader(props) {
  var article = props.article,
      date = props.date,
      editDeck = props.editDeck,
      editImage = props.editImage,
      editVertical = props.editVertical,
      editTitle = props.editTitle;
  var hero_section = article.hero_section;
  var url = hero_section && hero_section.url || "";
  var isVideo = url.includes("mp4");
  var alt = url.length ? article.title : "";
  var src = url.length && !isVideo && (0, _resizer.resize)(url, {
    width: 1200
  });
  return _react.default.createElement(TextHeaderContainer, {
    isEditing: Boolean(editTitle)
  }, _react.default.createElement(_FeatureInnerContent.FeatureInnerContent, {
    article: article,
    date: date,
    editDeck: editDeck,
    editVertical: editVertical,
    editTitle: editTitle
  }), _react.default.createElement(FeatureTextAsset, null, editImage && _react.default.createElement(_FeatureHeader.EditImage, null, editImage), url && (url.includes("mp4") ? _react.default.createElement("video", {
    src: url,
    autoPlay: true,
    controls: false,
    loop: true,
    muted: true,
    playsInline: true,
    width: "100%"
  }) : _react.default.createElement(Image, {
    src: src,
    alt: alt
  }))));
};

exports.FeatureTextHeader = FeatureTextHeader;

var Image = _styledComponents.default.img.withConfig({
  displayName: "FeatureTextHeader__Image",
  componentId: "sc-17k33r4-0"
})(["width:100%;height:auto;box-sizing:border-box;"]);

var FeatureTextAsset = _styledComponents.default.div.withConfig({
  displayName: "FeatureTextHeader__FeatureTextAsset",
  componentId: "sc-17k33r4-1"
})(["width:100%;padding-top:", "px;box-sizing:border-box;position:relative;"], (0, _palette.space)(2));

exports.FeatureTextAsset = FeatureTextAsset;

var TextHeaderContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "FeatureTextHeader__TextHeaderContainer",
  componentId: "sc-17k33r4-2"
})(["width:100%;position:relative;height:auto;padding:", "px;margin-top:50px;", ";", "{margin-bottom:150px;}", "{position:relative;}"], (0, _palette.space)(2), function (props) {
  return props.isEditing && "\n    margin-top: 0;\n  ";
}, _FeatureInnerContent.Title, _FeatureHeader.EditImage);
//# sourceMappingURL=FeatureTextHeader.js.map