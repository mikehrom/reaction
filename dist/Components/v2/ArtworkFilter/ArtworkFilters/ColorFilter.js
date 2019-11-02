"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorFilter = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ArtworkFilterContext = require("../ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColorFilter = function ColorFilter(_ref) {
  var _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded;
  var filterContext = (0, _ArtworkFilterContext.useArtworkFilterContext)();

  var toggleColor = function toggleColor(color) {
    if (filterContext.filters.color === color) {
      filterContext.unsetFilter("color");
    } else {
      filterContext.setFilter("color", color);
    }
  };

  var CheckmarkStyle = _objectSpread({
    position: "relative",
    cursor: "pointer"
  }, CheckmarkPositions[filterContext.filters.color]);

  return _react.default.createElement(_palette.Toggle, {
    label: "Color",
    expanded: expanded
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center",
    my: 1
  }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    height: "175",
    width: "175",
    x: "0px",
    y: "0px",
    viewBox: "0 0 175 175",
    enableBackground: "new 0 0 175 175",
    xmlSpace: "preserve"
  }, _react.default.createElement("g", null, _react.default.createElement("path", {
    fill: "#F7923A",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("orange");
    },
    d: "M64.9,172.1c14.4,3.9,29.9,4.1,45.3,0l-9.7-36.2c-8.8,2.4-17.7,2.2-25.9,0L64.9,172.1z"
  }), _react.default.createElement("path", {
    fill: "#435EA9",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("darkblue");
    },
    d: "M110.2,3C95.8-0.9,80.3-1.1,64.9,3l9.7,36.2c8.8-2.4,17.7-2.2,25.9,0L110.2,3z"
  }), _react.default.createElement("polygon", {
    fill: "none",
    points: "87.5,87.5 87.5,87.5 87.5,87.5  "
  }), _react.default.createElement("path", {
    fill: "#FFC749",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("gold");
    },
    d: "M52.2,122.9l-26.5,26.5c10.9,10.8,24.4,18.7,39.2,22.7l9.7-36.2C66.1,133.5,58.4,129.1,52.2,122.9z"
  }), _react.default.createElement("polygon", {
    fill: "#FFF200",
    points: "87.5,87.5 87.5,87.5 87.5,87.5  "
  }), _react.default.createElement("path", {
    fill: "#388540",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("darkgreen");
    },
    d: "M52.2,52.2L25.6,25.6C14.8,36.5,7,50.1,3,64.9l36.2,9.7C41.5,66.1,46,58.4,52.2,52.2z"
  }), _react.default.createElement("path", {
    fill: "#438C97",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("lightblue");
    },
    d: "M74.6,39.2L64.9,3C49.5,7.1,36.2,15.1,25.6,25.6l26.5,26.5C58.2,46.2,65.8,41.6,74.6,39.2z"
  }), _react.default.createElement("polygon", {
    fill: "#FFF200",
    points: "87.5,87.5 87.5,87.5 87.5,87.5  "
  }), _react.default.createElement("path", {
    fill: "#BCCC46",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("lightgreen");
    },
    d: "M3,64.9c-3.9,14.4-4.1,29.9,0,45.3l36.2-9.7c-2.4-8.8-2.2-17.7,0-25.9L3,64.9z"
  }), _react.default.createElement("path", {
    fill: "#FBE854",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("yellow");
    },
    d: "M39.2,100.5L3,110.2c4.1,15.4,12.1,28.7,22.6,39.2l26.5-26.5C46.2,116.9,41.6,109.3,39.2,100.5z"
  }), _react.default.createElement("polygon", {
    fill: "#FFF200",
    points: "87.5,87.5 87.5,87.5 87.5,87.5  "
  }), _react.default.createElement("path", {
    fill: "#F1572C",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("darkorange");
    },
    d: "M100.5,135.8l9.7,36.2c15.4-4.1,28.7-12.1,39.2-22.6l-26.5-26.5C116.9,128.9,109.3,133.5,100.5,135.8z"
  }), _react.default.createElement("path", {
    fill: "#D73127",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("red");
    },
    d: "M135.8,100.5c-2.3,8.5-6.7,16.2-12.9,22.4l26.5,26.5c10.8-10.9,18.7-24.4,22.7-39.2L135.8,100.5z"
  }), _react.default.createElement("path", {
    fill: "#B82C83",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("pink");
    },
    d: "M135.8,74.6c2.4,8.8,2.2,17.7,0,25.9l36.2,9.7c3.9-14.4,4.1-29.9,0-45.3L135.8,74.6z"
  }), _react.default.createElement("path", {
    fill: "#642B7F",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("darkviolet");
    },
    d: "M149.4,25.6l-26.5,26.5c6,6,10.6,13.6,12.9,22.4l36.2-9.7C167.9,49.5,159.9,36.2,149.4,25.6z"
  }), _react.default.createElement("path", {
    fill: "#6C479C",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("violet");
    },
    d: "M122.9,52.2l26.5-26.5C138.5,14.8,125,7,110.2,3l-9.7,36.2C108.9,41.5,116.7,46,122.9,52.2z"
  }), _react.default.createElement("path", {
    fill: "#DFDFDF",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("black-and-white");
    },
    d: "M101.7,73.4c7.8,7.8,7.8,20.5,0,28.3L73.4,73.4C81.2,65.6,93.9,65.6,101.7,73.4z"
  }), _react.default.createElement("path", {
    fill: "#595A5B",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return toggleColor("black-and-white");
    },
    d: "M73.4,73.4l28.3,28.3c-7.8,7.8-20.5,7.8-28.3,0C65.6,93.9,65.6,81.2,73.4,73.4z"
  }))), _react.default.createElement(_palette.CheckIcon, {
    onClick: function onClick(e) {
      return filterContext.unsetFilter("color");
    },
    style: CheckmarkStyle,
    fill: "white100"
  }))));
};

exports.ColorFilter = ColorFilter;
var CheckmarkPositions = {
  red: {
    bottom: "63px",
    left: "58px"
  },
  "black-and-white": {
    bottom: "98px"
  },
  pink: {
    bottom: "98px",
    left: "65px"
  },
  darkviolet: {
    bottom: "132px",
    left: "58px"
  },
  violet: {
    bottom: "156px",
    left: "32px"
  },
  darkblue: {
    bottom: "165px"
  },
  lightblue: {
    bottom: "156px",
    right: "37px"
  },
  darkgreen: {
    bottom: "132px",
    right: "60px"
  },
  lightgreen: {
    bottom: "98px",
    right: "69px"
  },
  yellow: {
    bottom: "63px",
    right: "60px"
  },
  gold: {
    bottom: "36px",
    right: "37px"
  },
  orange: {
    bottom: "28px"
  },
  darkorange: {
    bottom: "36px",
    left: "36px"
  }
};
//# sourceMappingURL=ColorFilter.js.map