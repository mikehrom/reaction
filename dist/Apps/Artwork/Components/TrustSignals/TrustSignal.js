"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrustSignal = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TrustSignal = function TrustSignal(_ref) {
  var Icon = _ref.Icon,
      label = _ref.label,
      description = _ref.description,
      other = _objectWithoutProperties(_ref, ["Icon", "label", "description"]);

  return _react.default.createElement(_palette.Flex, other, Icon, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    ml: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium",
    color: "black100"
  }, label), _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, description)));
};

exports.TrustSignal = TrustSignal;
//# sourceMappingURL=TrustSignal.js.map