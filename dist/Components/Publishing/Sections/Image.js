"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

require("core-js/modules/es6.regexp.replace");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _resizer = require("../../../Utils/resizer");

var _Constants = require("../Constants");

var _Caption = require("./Caption");

var _ImageWrapper = require("./ImageWrapper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(props) {
  var children = props.children,
      color = props.color,
      editing = props.editing,
      editCaption = props.editCaption,
      height = props.height,
      image = props.image,
      layout = props.layout,
      linked = props.linked,
      sectionLayout = props.sectionLayout,
      slideshowIndex = props.slideshowIndex,
      width = props.width;
  var caption = image.caption || "";
  var shouldIncreaseResizeWidth = !_sharify.data.IS_MOBILE && sectionLayout === "fillwidth";
  var src = (0, _resizer.resize)(image.url, {
    width: shouldIncreaseResizeWidth ? 2000 : 1200,
    quality: _Constants.GLOBAL_IMAGE_QUALITY
  });
  var alt = caption.replace(/<[^>]*>/g, "");
  /* strip caption html */

  return _react.default.createElement("div", {
    className: "article-image"
  }, _react.default.createElement(_ImageWrapper.ImageWrapper, {
    linked: linked,
    layout: layout,
    src: src,
    width: width,
    height: height,
    alt: alt,
    slideshowIndex: slideshowIndex,
    editing: editCaption || editing
  }), _react.default.createElement(_Caption.Caption, {
    caption: caption,
    color: color,
    layout: layout,
    sectionLayout: sectionLayout
  }, editCaption && editCaption()), children);
};

exports.Image = Image;
Image.defaultProps = {
  width: "100%",
  height: "auto",
  linked: true
};
//# sourceMappingURL=Image.js.map