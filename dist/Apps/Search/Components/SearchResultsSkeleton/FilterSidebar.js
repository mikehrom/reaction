"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterSidebar = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterSidebarSection = function FilterSidebarSection(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Box, {
    width: 80,
    height: 14,
    style: {
      marginBottom: "15px",
      backgroundColor: (0, _palette.color)("black10")
    }
  }), _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    mt: 10
  }, _react.default.createElement(_palette.Box, {
    width: 20,
    height: 20,
    bg: (0, _palette.color)("black10"),
    mr: 1
  }), _react.default.createElement(_palette.Box, {
    width: 100,
    height: 17,
    bg: (0, _palette.color)("black10")
  })), _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    mt: 10
  }, _react.default.createElement(_palette.Box, {
    width: 20,
    height: 20,
    bg: (0, _palette.color)("black10"),
    mr: 1
  }), _react.default.createElement(_palette.Box, {
    width: 100,
    height: 17,
    bg: (0, _palette.color)("black10")
  })), _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    mt: 10
  }, _react.default.createElement(_palette.Box, {
    width: 20,
    height: 20,
    bg: (0, _palette.color)("black10"),
    mr: 1
  }), _react.default.createElement(_palette.Box, {
    width: 100,
    height: 17,
    bg: (0, _palette.color)("black10")
  })), _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    mt: 10
  }, _react.default.createElement(_palette.Box, {
    width: 20,
    height: 20,
    bg: (0, _palette.color)("black10"),
    mr: 1
  }), _react.default.createElement(_palette.Box, {
    width: 100,
    height: 17,
    bg: (0, _palette.color)("black10")
  })));
};

var FilterSidebar = function FilterSidebar(props) {
  return _react.default.createElement(_palette.Box, {
    display: ["none", "block"],
    width: "25%",
    pl: [0, 20],
    pr: 10,
    mr: 10
  }, _react.default.createElement(FilterSidebarSection, null), _react.default.createElement(_palette.Separator, {
    mt: 3,
    mb: 3
  }), _react.default.createElement(FilterSidebarSection, null), _react.default.createElement(_palette.Separator, {
    mt: 3,
    mb: 3
  }), _react.default.createElement(FilterSidebarSection, null));
};

exports.FilterSidebar = FilterSidebar;
//# sourceMappingURL=FilterSidebar.js.map