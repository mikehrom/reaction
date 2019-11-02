"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authors = void 0;

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Author = require("./Author");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Authors = function Authors(props) {
  var authors = props.authors,
      color = props.color;
  return _react.default.createElement(AuthorsContainer, null, authors.map(function (author, i) {
    return _react.default.createElement(_Author.Author, {
      author: author,
      key: i,
      color: color
    });
  }));
};

exports.Authors = Authors;

var AuthorsContainer = _styledComponents.default.div.withConfig({
  displayName: "Authors__AuthorsContainer",
  componentId: "j7iv2v-0"
})(["display:flex;flex-direction:column;"]);
//# sourceMappingURL=Authors.js.map