"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shrinkAndFadeOut = exports.growAndFadeIn = exports.fadeOut = exports.fadeIn = void 0;

var _styledComponents = require("styled-components");

var fadeIn = (0, _styledComponents.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
exports.fadeIn = fadeIn;
var fadeOut = (0, _styledComponents.keyframes)(["from{opacity:1;}to{opacity:0;}"]);
exports.fadeOut = fadeOut;

var growAndFadeIn = function growAndFadeIn(height) {
  return (0, _styledComponents.keyframes)(["from{opacity:0;height:0;}to{opacity:1;height:", ";}"], height);
};

exports.growAndFadeIn = growAndFadeIn;

var shrinkAndFadeOut = function shrinkAndFadeOut(height) {
  return (0, _styledComponents.keyframes)(["from{opacity:0;height:0;}to{opacity:1;height:", ";}"], height);
};

exports.shrinkAndFadeOut = shrinkAndFadeOut;
//# sourceMappingURL=Animations.js.map