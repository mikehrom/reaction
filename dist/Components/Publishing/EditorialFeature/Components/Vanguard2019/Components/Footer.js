"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanguardFooter = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VanguardFooter = function VanguardFooter() {
  return _react.default.createElement(_palette.Box, {
    background: "white",
    pb: 80
  }, _react.default.createElement(_palette.Box, {
    maxWidth: ["100vw", 1000],
    px: ["10vw", "10vw", "10vw", "10vw", 4],
    mx: "auto"
  }, _react.default.createElement(_palette.Separator, {
    mb: 4
  }), _react.default.createElement(_palette.Flex, {
    flexDirection: ["column", "row"]
  }, _react.default.createElement(_palette.Box, {
    pr: [0, 2],
    width: ["100%", "50%"],
    pb: 4
  }, _react.default.createElement(_palette.Sans, {
    size: "3",
    weight: "medium"
  }, "Corrections"), _react.default.createElement(_palette.Serif, {
    size: "3",
    element: "p"
  }, corrections)), _react.default.createElement(_palette.Box, {
    pl: [0, 2],
    width: ["100%", "50%"],
    pb: 4
  }, _react.default.createElement(_palette.Sans, {
    size: "3",
    weight: "medium"
  }, "Clarifications"), _react.default.createElement(_palette.Serif, {
    size: "3",
    element: "p"
  }, clarifications))), _react.default.createElement(_palette.Separator, {
    mb: 2
  }), _react.default.createElement(_palette.Serif, {
    size: "3"
  }, "Back to ", _react.default.createElement("a", {
    href: "/articles"
  }, "Artsy Editorial"))));
};

exports.VanguardFooter = VanguardFooter;
var corrections = "A previous version of this article referred to Aike gallery as\nAike-Dellarco; McArthur Binion\u2019s show at the Mississippi Museum of\nArt, originally scheduled for this fall, is not opening until 2020;\nand Melike Kara is Kurdish-German not Turkish-German. The text has\nbeen updated to reflect these changes.";
var clarifications = "While only Beyonc\xE9 was named as the buyer of a Derek Fordjour work at\nFrieze New York, Jay-Z was actually the buyer; in order to fully\nrecognize the breadth of galleries that represent the featured\nartists, additional gallery names have been added to the text for\nBeatriz Gonz\xE1lez, Vivian Suter, and Diane Simpson; while the text on\nHenry Taylor previously referred to Eva Presenhuber as his dealer, it\nhas been updated to reflect that Blum & Poe has been primarily\nrepresenting the artist for the past decade; and mention of\nSculptureCenter, organizers of Tishan Hsu\u2019s 2020 show at the Hammer,\nhas been added to clarify their involvement with the exhibition.";
//# sourceMappingURL=Footer.js.map