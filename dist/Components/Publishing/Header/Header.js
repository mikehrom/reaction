"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _ClassicHeader = require("./Layouts/ClassicHeader");

var _FeatureHeader = require("./Layouts/FeatureHeader");

var _StandardHeader = require("./Layouts/StandardHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var article = props.article,
      date = props.date,
      textColor = props.textColor,
      editLeadParagraph = props.editLeadParagraph,
      editDeck = props.editDeck,
      editImage = props.editImage,
      editTitle = props.editTitle,
      editVertical = props.editVertical;

  switch (article.layout) {
    case "feature":
      {
        return _react.default.createElement(_FeatureHeader.FeatureHeader, {
          article: article,
          textColor: textColor,
          date: date && date,
          editDeck: editDeck,
          editImage: editImage,
          editTitle: editTitle,
          editVertical: editVertical
        });
      }

    case "standard":
      {
        return _react.default.createElement(_StandardHeader.StandardHeader, {
          article: article,
          date: date && date,
          editTitle: editTitle,
          editVertical: editVertical
        });
      }

    default:
      {
        return _react.default.createElement(_ClassicHeader.ClassicHeader, {
          article: article,
          date: date && date,
          editLeadParagraph: editLeadParagraph,
          editTitle: editTitle
        });
      }
  }
};

exports.Header = Header;
//# sourceMappingURL=Header.js.map