"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditImage = exports.FeatureHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FeatureBasicHeader = require("./Components/FeatureBasicHeader");

var _FeatureFullscreenHeader = require("./Components/FeatureFullscreenHeader");

var _FeatureSplitHeader = require("./Components/FeatureSplitHeader");

var _FeatureTextHeader = require("./Components/FeatureTextHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureHeader = function FeatureHeader(props) {
  var hero_section = props.article.hero_section;
  var type = hero_section && hero_section.type;

  switch (type) {
    case "basic":
      {
        return _react.default.createElement(_FeatureBasicHeader.FeatureBasicHeader, props);
      }

    case "fullscreen":
      {
        return _react.default.createElement(_FeatureFullscreenHeader.FeatureFullscreenHeader, props);
      }

    case "split":
      {
        return _react.default.createElement(_FeatureSplitHeader.FeatureSplitHeader, props);
      }

    default:
      {
        return _react.default.createElement(_FeatureTextHeader.FeatureTextHeader, props);
      }
  }
};

exports.FeatureHeader = FeatureHeader;

var EditImage = _styledComponents.default.div.withConfig({
  displayName: "FeatureHeader__EditImage",
  componentId: "qkjt9w-0"
})(["position:absolute;"]);

exports.EditImage = EditImage;
//# sourceMappingURL=FeatureHeader.js.map