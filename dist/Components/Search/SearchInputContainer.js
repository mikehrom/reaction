"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInputContainer = void 0;

require("core-js/modules/es6.object.assign");

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _palette = require("@artsy/palette");

var _Input = _interopRequireDefault(require("../Input"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SearchButton = _styledComponents.default.button.withConfig({
  displayName: "SearchInputContainer__SearchButton",
  componentId: "sc-1u4asi4-0"
})(["position:absolute;right:0;top:calc(50% + 3px);border:none;margin-top:-14px;width:24px;height:24px;margin-right:10px;background:none;padding:0;:focus{background:", ";border-radius:50%;svg > path{fill:", ";}}"], (0, _palette.color)("purple100"), (0, _palette.color)("white100"));

var SearchInputContainer = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(_palette.Box, {
    style: {
      position: "relative"
    }
  }, _react.default.createElement(_Input.default, _extends({
    ref: ref,
    style: {
      width: "100%"
    }
  }, props)), _react.default.createElement(SearchButton, {
    onClick: function onClick(event) {
      ;
      event.target.parentElement.blur();

      if ((0, _isEmpty2.default)(props.value)) {
        event.preventDefault();
      }
    }
  }, _react.default.createElement(_palette.MagnifyingGlassIcon, null)));
});

exports.SearchInputContainer = SearchInputContainer;
//# sourceMappingURL=SearchInputContainer.js.map