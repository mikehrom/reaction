"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridItem = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The animation that's used for the background of an image while it's loading
 * in.
 */
var pulse = (0, _styledComponents.keyframes)(["0%{background-color:", ";}50%{background-color:", ";}100%{background-color:", ";}"], (0, _palette.color)("black10"), (0, _palette.color)("black5"), (0, _palette.color)("black10")); // TODO: Move animation out to a shared place

var pulseAnimation = function pulseAnimation() {
  return (0, _styledComponents.css)(["", " 2s ease-in-out infinite;"], pulse);
};

var Placeholder = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "GridItem__Placeholder",
  componentId: "lxj3p9-0"
})(["background-color:", ";animation:", ";", ""], (0, _palette.color)("black10"), pulseAnimation, _styledSystem.borderRadius);

var GridItem = function GridItem(props) {
  return _react.default.createElement(_palette.Box, {
    mb: 30,
    pr: 20
  }, _react.default.createElement(Placeholder, {
    height: props.height,
    style: {
      backgroundColor: (0, _palette.color)("black10")
    }
  }), _react.default.createElement(Placeholder, {
    width: 80,
    height: 14,
    style: {
      marginTop: 10,
      backgroundColor: (0, _palette.color)("black10")
    }
  }), _react.default.createElement(Placeholder, {
    width: 140,
    height: 14,
    style: {
      marginTop: 10,
      backgroundColor: (0, _palette.color)("black10")
    }
  }), _react.default.createElement(Placeholder, {
    width: 120,
    height: 14,
    style: {
      marginTop: 5,
      backgroundColor: (0, _palette.color)("black10")
    }
  }), _react.default.createElement(Placeholder, {
    width: 110,
    height: 14,
    style: {
      marginTop: 5,
      backgroundColor: (0, _palette.color)("black10")
    }
  }), _react.default.createElement(_palette.Spacer, null));
};

exports.GridItem = GridItem;
//# sourceMappingURL=GridItem.js.map