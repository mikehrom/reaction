"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleMeta = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _Constants = require("./Constants");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _resizer = require("../../Utils/resizer");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var responsiveCss = (0, _Responsive.createMediaStyle)();

var ArticleMeta = function ArticleMeta(props) {
  var article = props.article;
  var title = article.search_title || article.thumbnail_title || "";
  var titleExtension = article.layout === "news" ? "Artsy News" : "Artsy";
  var url = (0, _Constants.getFullEditorialHref)(article.layout, article.slug);
  var socialTitle = article.social_title || article.thumbnail_title || "";
  var searchDescription = article.search_description || article.description;
  var socialDescription = article.social_description || article.description;
  var socialImage = article.social_image || article.thumbnail_image;
  var authors = article.authors || article.contributing_authors || [];
  var keywords = article.keywords && article.keywords.join(", ") || "";
  var sailthruKeywords = ["article".concat(keywords && ", ".concat(keywords))];
  var emailMetadata = article.published && article.email_metadata;

  if (article.featured) {
    sailthruKeywords.push("magazine");
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("title", null, "".concat(title, " - ").concat(titleExtension)), _react.default.createElement("link", {
    rel: "canonical",
    href: url
  }), _react.default.createElement("meta", {
    name: "description",
    content: searchDescription
  }),
  /** amp url, do we need? */
  article.featured && article.published && ["standard", "feature"].includes(article.layout) && _react.default.createElement("link", {
    rel: "amphtml",
    href: "".concat(url, "/amp")
  }), _react.default.createElement("meta", {
    property: "og:site_name",
    content: "Artsy"
  }), _react.default.createElement("meta", {
    property: "og:title",
    name: "og:title",
    content: socialTitle
  }), _react.default.createElement("meta", {
    property: "og:url",
    content: url
  }), _react.default.createElement("meta", {
    property: "og:type",
    content: "article"
  }), _react.default.createElement("meta", {
    property: "og:published_time",
    content: article.published_at
  }), _react.default.createElement("meta", {
    property: "og:description",
    content: socialDescription
  }), _react.default.createElement("meta", {
    property: "og:image",
    content: socialImage
  }), _react.default.createElement("meta", {
    property: "fb:app_id",
    content: _sharify.data.FACEBOOK_ID
  }), _react.default.createElement("meta", {
    property: "article:published_time",
    content: article.published_at
  }), _react.default.createElement("meta", {
    property: "article:publisher",
    content: "https://www.facebook.com/artsy/"
  }), _react.default.createElement("meta", {
    name: "twitter:site",
    content: "@artsy"
  }), _react.default.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), _react.default.createElement("meta", {
    property: "twitter:url",
    content: url
  }), _react.default.createElement("meta", {
    property: "twitter:description",
    content: socialDescription
  }), _react.default.createElement("meta", {
    property: "twitter:image",
    content: socialImage
  }), _react.default.createElement("meta", {
    name: "twitter:title",
    content: socialTitle
  }),
  /** Sailthru */
  emailMetadata && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
    name: "sailthru.date",
    content: article.published_at
  }), emailMetadata.headline && _react.default.createElement("meta", {
    name: "sailthru.title",
    content: emailMetadata.headline
  }), emailMetadata.author && _react.default.createElement("meta", {
    name: "sailthru.author",
    content: emailMetadata.author
  }), emailMetadata.image_url && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
    name: "sailthru.image.full",
    content: (0, _resizer.crop)(emailMetadata.image_url, {
      width: 1200,
      height: 800
    })
  }), _react.default.createElement("meta", {
    name: "sailthru.image.thumb",
    content: (0, _resizer.crop)(emailMetadata.image_url, {
      width: 600,
      height: 400
    })
  })), _react.default.createElement("meta", {
    name: "sailthru.tags",
    content: sailthruKeywords.join(", ")
  })), keywords.length && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
    property: "news_keywords",
    content: keywords
  }), _react.default.createElement("meta", {
    name: "keywords",
    content: keywords
  }), _react.default.createElement("meta", {
    property: "article:tag",
    content: keywords
  })), authors.map(function (author, i) {
    return author.name && _react.default.createElement("meta", {
      key: i,
      name: "author",
      content: author.name
    });
  }), !article.indexable && _react.default.createElement("meta", {
    name: "robots",
    content: "noindex"
  }), _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), _react.default.createElement("style", null, responsiveCss));
};

exports.ArticleMeta = ArticleMeta;
//# sourceMappingURL=ArticleMeta.js.map