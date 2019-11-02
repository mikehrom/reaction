"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleItem = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _Responsive = require("../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleItem = function ArticleItem(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(SmallArticleItem, props)), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(LargeArticleItem, props)));
};

exports.ArticleItem = ArticleItem;

var LargeArticleItem = function LargeArticleItem(props) {
  var author = props.author,
      date = props.date,
      href = props.href,
      imageUrl = props.imageUrl,
      title = props.title,
      lastChild = props.lastChild;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Row, {
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      window.location.href = href;
    }
  }, _react.default.createElement(_palette.Col, {
    sm: 2
  }, _react.default.createElement(Date, {
    size: "3",
    weight: "medium"
  }, date)), _react.default.createElement(_palette.Col, {
    sm: 8
  }, _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, {
    pr: 12
  }, _react.default.createElement(Title, {
    size: "5"
  }, _react.default.createElement("a", {
    href: href,
    className: "noUnderline"
  }, title)), _react.default.createElement(Credit, {
    size: "2",
    color: "black60"
  }, author)))), _react.default.createElement(_palette.Col, {
    sm: 2
  }, _react.default.createElement("a", {
    href: href
  }, _react.default.createElement(_palette.Image, {
    style: {
      height: "100px",
      width: "auto",
      maxWidth: 140,
      maxHeight: 280,
      objectFit: "fill"
    },
    src: imageUrl,
    mb: 2
  })))), !lastChild && _react.default.createElement(_palette.Separator, null), _react.default.createElement(_palette.Spacer, {
    mt: 3
  }));
};

var SmallArticleItem = function SmallArticleItem(props) {
  var author = props.author,
      date = props.date,
      href = props.href,
      imageUrl = props.imageUrl,
      title = props.title,
      lastChild = props.lastChild;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      window.location.href = href;
    }
  }, _react.default.createElement(_palette.Box, {
    pr: 2
  }, _react.default.createElement(Date, {
    size: "1",
    weight: "medium"
  }, date), _react.default.createElement(_palette.Spacer, {
    mb: 0.5
  }), _react.default.createElement(Title, {
    size: "2"
  }, _react.default.createElement("a", {
    href: href,
    className: "noUnderline"
  }, title)), _react.default.createElement(_palette.Spacer, {
    mb: 0.5
  }), _react.default.createElement(Credit, {
    size: "1",
    color: "black60"
  }, author)), _react.default.createElement(_palette.Image, {
    width: "70px",
    height: "100%",
    src: imageUrl
  })), _react.default.createElement(_palette.Spacer, {
    mt: 2
  }), !lastChild && _react.default.createElement(_palette.Separator, null), _react.default.createElement(_palette.Spacer, {
    mt: 3
  }));
};

var Date = _palette.Sans;
var Title = _palette.Serif;
var Credit = _palette.Serif;
//# sourceMappingURL=ArtistArticle.js.map