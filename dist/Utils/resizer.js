"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resize = exports.crop = void 0;

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GEMINI_CLOUDFRONT_URL = "https://d7hftxdivxxvm.cloudfront.net";

var warn = function warn(message) {
  if (process.env.NODE_ENV === "development") {
    console.warn(message);
  }
};

var crop = function crop(src, options) {
  var width = options.width,
      height = options.height,
      quality = options.quality; // dont call gemini with empty src

  if (!src) return null;

  if (!width && !height) {
    warn("requires width and height");
    return src;
  } else if (width === 0) {
    warn("width must be non-zero");
    return src;
  } else if (height === 0) {
    warn("height must be non-zero");
    return src;
  }

  var config = {
    resize_to: "fill",
    src: src,
    width: width,
    height: height,
    quality: quality || 95
  };
  return [GEMINI_CLOUDFRONT_URL, _qs.default.stringify(config)].join("?");
};

exports.crop = crop;

var resize = function resize(src, options) {
  var width = options.width,
      height = options.height,
      quality = options.quality,
      convert_to = options.convert_to; // dont call gemini with empty src

  if (!src) return null;
  var resizeTo;

  if (width && !height) {
    resizeTo = "width";
  } else if (height && !width) {
    resizeTo = "height";
  } else {
    resizeTo = "fit";
  }

  var config = {
    resize_to: resizeTo,
    src: src,
    width: width,
    height: height,
    quality: quality || 80,
    convert_to: convert_to
  };
  return [GEMINI_CLOUDFRONT_URL, _qs.default.stringify(config)].join("?");
};

exports.resize = resize;
//# sourceMappingURL=resizer.js.map