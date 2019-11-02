"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _ImageSetPreview = require("./ImageSetPreview");

Object.keys(_ImageSetPreview).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ImageSetPreview[key];
    }
  });
});
var _default = _ImageSetPreview.ImageSetPreview;
exports.default = _default;
//# sourceMappingURL=index.js.map