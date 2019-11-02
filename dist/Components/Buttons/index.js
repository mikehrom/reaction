"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Default = _interopRequireDefault(require("./Default"));

var _Facebook = _interopRequireDefault(require("./Facebook"));

var _Ghost = _interopRequireDefault(require("./Ghost"));

var _Inverted = _interopRequireDefault(require("./Inverted"));

var _MultiStateButton = _interopRequireDefault(require("./MultiStateButton"));

var _Twitter = _interopRequireDefault(require("./Twitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var _default = {
  Button: _Default.default,
  FacebookButton: _Facebook.default,
  GhostButton: _Ghost.default,
  InvertedButton: _Inverted.default,
  MultiStateButton: _MultiStateButton.default,
  TwitterButton: _Twitter.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map