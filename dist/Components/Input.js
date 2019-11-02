"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputError = exports.Title = exports.StyledInput = exports.Input = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _palette = require("@artsy/palette");

var _Animations = require("../Assets/Animations");

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("./Helpers");

var _Mixins = require("./Mixins");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @deprecated in favor of our Design System Input component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/input
 */
var Input = _react.default.forwardRef(function (_ref, ref) {
  var error = _ref.error,
      title = _ref.title,
      description = _ref.description,
      rest = _objectWithoutProperties(_ref, ["error", "title", "description"]);

  return _react.default.createElement(_palette.Box, null, title && _react.default.createElement(Title, null, title), description && _react.default.createElement(Description, null, description), _react.default.createElement(StyledInput, _extends({
    ref: ref,
    hasError: !!error
  }, rest)), error && _react.default.createElement(InputError, null, error));
});

exports.Input = Input;

var StyledInput = _styledComponents.default.input.withConfig({
  displayName: "Input__StyledInput",
  componentId: "zhthko-0"
})(["", ";", ";background-clip:padding-box;border-radius:0;"], _Mixins.borderedInput, (0, _Helpers.block)(24));

exports.StyledInput = StyledInput;

var Title = _styledComponents.default.div.withConfig({
  displayName: "Input__Title",
  componentId: "zhthko-1"
})(["", ";"], (0, _Fonts.garamond)("s17"));

exports.Title = Title;

var Description = _styledComponents.default.div.withConfig({
  displayName: "Input__Description",
  componentId: "zhthko-2"
})(["", ";color:", ";margin:", "px 0 0;"], (0, _Fonts.garamond)("s15"), (0, _palette.color)("black60"), (0, _palette.space)(0.3));

var InputError = _styledComponents.default.div.withConfig({
  displayName: "Input__InputError",
  componentId: "zhthko-3"
})(["", ";margin-top:", "px;color:", ";transition:visibility 0.2s linear;animation:", " 0.25s linear;height:16px;"], (0, _Fonts.unica)("s12"), (0, _palette.space)(1), (0, _palette.color)("red100"), (0, _Animations.growAndFadeIn)("16px"));

exports.InputError = InputError;
var _default = Input;
exports.default = _default;
//# sourceMappingURL=Input.js.map