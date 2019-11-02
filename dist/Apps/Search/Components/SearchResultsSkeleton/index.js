"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResultsSkeleton = void 0;

var _palette = require("@artsy/palette");

var _AppContainer = require("../../../Components/AppContainer");

var _react = _interopRequireDefault(require("react"));

var _FilterSidebar = require("./FilterSidebar");

var _GridItem = require("./GridItem");

var _Header = require("./Header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchResultsSkeleton = function SearchResultsSkeleton(props) {
  return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_palette.Box, {
    style: {
      minWidth: 320
    },
    mx: 2
  }, _react.default.createElement(_Header.Header, null), _react.default.createElement(_palette.Flex, null, _react.default.createElement(_FilterSidebar.FilterSidebar, null), _react.default.createElement(_palette.Box, {
    width: ["100%", "75%"]
  }, _react.default.createElement(_palette.Grid, {
    fluid: true
  }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
    xs: "6",
    sm: "6",
    md: "6",
    lg: "4"
  }, _react.default.createElement(_GridItem.GridItem, {
    height: 200
  }), _react.default.createElement(_GridItem.GridItem, {
    height: 400
  }), _react.default.createElement(_GridItem.GridItem, {
    height: 240
  })), _react.default.createElement(_palette.Col, {
    xs: "6",
    sm: "6",
    md: "6",
    lg: "4"
  }, _react.default.createElement(_GridItem.GridItem, {
    height: 300
  }), _react.default.createElement(_GridItem.GridItem, {
    height: 200
  }), _react.default.createElement(_GridItem.GridItem, {
    height: 320
  })), _react.default.createElement(_palette.Col, {
    xs: "6",
    sm: "6",
    md: "6",
    lg: "4"
  }, _react.default.createElement(_GridItem.GridItem, {
    height: 240
  }), _react.default.createElement(_GridItem.GridItem, {
    height: 400
  }))))))));
};

exports.SearchResultsSkeleton = SearchResultsSkeleton;
//# sourceMappingURL=index.js.map