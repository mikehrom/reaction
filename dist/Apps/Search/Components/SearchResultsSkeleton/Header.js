"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react.default.createElement(_palette.Box, {
    height: 100,
    mb: 30,
    mt: 120,
    pr: [0, 20],
    pl: [0, 20]
  }, _react.default.createElement(_palette.Box, {
    pl: [20, 0]
  }, _react.default.createElement(_palette.Box, {
    mb: 40,
    background: (0, _palette.color)("black10"),
    width: 260,
    height: 20
  }), _react.default.createElement(_palette.Box, {
    width: 80,
    height: 17,
    mr: 3,
    display: "inline-block",
    background: (0, _palette.color)("black10")
  }), _react.default.createElement(_palette.Box, {
    width: 80,
    height: 17,
    mr: 3,
    display: "inline-block",
    background: (0, _palette.color)("black10")
  }), _react.default.createElement(_palette.Box, {
    width: 80,
    height: 17,
    mr: 3,
    display: ["none", "inline-block"],
    background: (0, _palette.color)("black10")
  }), _react.default.createElement(_palette.Box, {
    width: 80,
    height: 17,
    mr: 3,
    display: ["none", "inline-block"],
    background: (0, _palette.color)("black10")
  }), _react.default.createElement(_palette.Box, {
    width: 80,
    height: 17,
    mr: 3,
    display: ["none", "inline-block"],
    background: (0, _palette.color)("black10")
  }), _react.default.createElement(_palette.Box, {
    width: 80,
    height: 17,
    mr: 3,
    display: ["none", "inline-block"],
    background: (0, _palette.color)("black10")
  })), _react.default.createElement(_palette.Separator, {
    mt: 10
  }));
};

exports.Header = Header;
//# sourceMappingURL=Header.js.map