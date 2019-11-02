"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pMedia = exports.media = exports.block = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.reduce");

var _styledComponents = require("styled-components");

var _Theme = _interopRequireDefault(require("../Assets/Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper function to display an element as a block that inherits its parents width
 * @param margin value in pixels to remove from width 100%
 */
var block = function block() {
  var margin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (props.block) {
      return (0, _styledComponents.css)(["width:100%;margin:10px auto;"]);
    }
  };
};

exports.block = block;
var sizes = _Theme.default.flexboxgrid.breakpoints;

/**
 * @deprecated import { media } from `Styleguide/Elements/Grid` instead
 */
var media = Object.keys(sizes).reduce(function (accumulator, label) {
  // using px in breakpoints to maintain uniform units with flexbox-grid
  // https://zellwk.com/blog/media-query-units/
  var pxSize = sizes[label];

  accumulator[label] = function (strings) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], pxSize, _styledComponents.css.apply(void 0, [strings].concat(args)));
  };

  return accumulator;
}, {});
exports.media = media;
var psizes = _Theme.default.publishing.breakpoints;
var pMedia = Object.keys(psizes).reduce(function (accumulator, label) {
  var pxSize = psizes[label];

  accumulator[label] = function (strings) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return (0, _styledComponents.css)(["@media (max-width:", "px){", ";}"], pxSize, _styledComponents.css.apply(void 0, [strings].concat(args)));
  };

  return accumulator;
}, {});
exports.pMedia = pMedia;
//# sourceMappingURL=Helpers.js.map