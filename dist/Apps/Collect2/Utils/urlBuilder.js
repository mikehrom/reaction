"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildUrlForCollectApp = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _urlBuilder = require("../../../Components/v2/ArtworkFilter/Utils/urlBuilder");

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var buildUrlForCollectApp = function buildUrlForCollectApp(state) {
  var fragment = buildCollectUrlFragmentFromState(state);
  var url = fragment ? "/collect".concat(fragment) : "/collect";
  return url;
};

exports.buildUrlForCollectApp = buildUrlForCollectApp;

var buildCollectUrlFragmentFromState = function buildCollectUrlFragmentFromState(state) {
  var _ref = (0, _urlBuilder.removeDefaultValues)(state),
      medium = _ref.medium,
      params = _objectWithoutProperties(_ref, ["medium"]);

  var emptyOrSpecificMedium = medium ? "/".concat(medium) : "";

  if (Object.keys(params).length === 0) {
    return emptyOrSpecificMedium;
  }

  return "".concat(emptyOrSpecificMedium, "?").concat(_qs.default.stringify(params));
};
//# sourceMappingURL=urlBuilder.js.map