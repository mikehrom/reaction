"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalPadding = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      padding-right: ", "px;\n      padding-left: ", "px;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HorizontalPadding = _styledComponents.default.div.withConfig({
  displayName: "HorizontalPadding",
  componentId: "sc-8icl3b-0"
})(["", ";", ";margin-right:auto;margin-left:auto;"], function (p) {
  return _palette.media.xs(_templateObject(), p.px[0] && (0, _palette.space)(p.px[0]) || 0, p.px[0] && (0, _palette.space)(p.px[0]) || 0);
}, function (p) {
  return p.px[1] && (0, _styledComponents.css)(["padding-right:", "px;padding-left:", "px;"], (0, _palette.space)(p.px[1]), (0, _palette.space)(p.px[1]));
});

exports.HorizontalPadding = HorizontalPadding;
HorizontalPadding.defaultProps = {
  px: [2, 4]
};
//# sourceMappingURL=HorizontalPadding.js.map