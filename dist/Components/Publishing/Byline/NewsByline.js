"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsByline = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

var _Author = require("./Author");

var _DateSource = require("./DateSource");

var _Share = require("./Share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsByline = function NewsByline(props) {
  var article = props.article,
      editSource = props.editSource,
      isTruncated = props.isTruncated,
      isMobile = props.isMobile;
  var authors = article.authors,
      title = article.title;
  var url = (0, _Constants.getArticleFullHref)(article.slug);
  return _react.default.createElement(NewsBylineContainer, null, _react.default.createElement(AuthorDateContainer, null, !isTruncated && _react.default.createElement(_Author.Author, {
    authors: authors
  }), _react.default.createElement(_DateSource.DateSource, {
    article: article,
    editSource: editSource
  })), !isTruncated && _react.default.createElement(_Share.Share, {
    url: url,
    title: title,
    isMobile: isMobile,
    isNews: true
  }));
};

exports.NewsByline = NewsByline;

var NewsBylineContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsByline__NewsBylineContainer",
  componentId: "q1u9bl-0"
})(["display:flex;flex:1;justify-content:space-between;align-items:flex-start;", "{margin-top:0;margin-bottom:5px;}"], _Author.StyledAuthor);

var AuthorDateContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsByline__AuthorDateContainer",
  componentId: "q1u9bl-1"
})(["display:flex;flex-direction:column;"]);
//# sourceMappingURL=NewsByline.js.map