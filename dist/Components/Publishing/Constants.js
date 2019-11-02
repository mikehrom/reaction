"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtsySlugsFromHTML = exports.getArtsySlugsFromArticle = exports.formatTime = exports.getMediaDate = exports.getCurrentUnixTimestamp = exports.getDate = exports.getAuthorByline = exports.getFullArtsyHref = exports.getFullEditorialHref = exports.getEditorialHref = exports.getPreSlugPath = exports.getArticleFullHref = exports.getArticleHref = exports.SIZE_ME_REFRESH_RATE = exports.GLOBAL_IMAGE_QUALITY = exports.EMAIL_REGEX = void 0;

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _last2 = _interopRequireDefault(require("lodash/last"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _luxon = require("luxon");

var _url = _interopRequireDefault(require("url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_URL = process.env.APP_URL || "https://www.artsy.net";
/**
 * Matches for Email / Instant Articles
 */

var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
 * The quality to request from image CDN
 */

exports.EMAIL_REGEX = EMAIL_REGEX;
var GLOBAL_IMAGE_QUALITY = 80;
/**
 * TODO: Eventually remove sizeMe
 */

exports.GLOBAL_IMAGE_QUALITY = GLOBAL_IMAGE_QUALITY;
var SIZE_ME_REFRESH_RATE = 500;
/**
 * Relative path to article
 */

exports.SIZE_ME_REFRESH_RATE = SIZE_ME_REFRESH_RATE;

var getArticleHref = function getArticleHref(slug) {
  return "/article/".concat(slug);
};
/**
 * Absolute path to article
 */


exports.getArticleHref = getArticleHref;

var getArticleFullHref = function getArticleFullHref(slug) {
  return "".concat(APP_URL, "/article/").concat(slug);
};
/**
 * Get the pre-slug part of URL
 */


exports.getArticleFullHref = getArticleFullHref;

var getPreSlugPath = function getPreSlugPath(layout) {
  return ["standard", "feature"].includes(layout) ? "article" : layout;
};
/**
 * Relative path to editorial entity
 */


exports.getPreSlugPath = getPreSlugPath;

var getEditorialHref = function getEditorialHref(layout, slug) {
  var layoutType = getPreSlugPath(layout);
  return "/".concat(layoutType, "/").concat(slug);
};
/**
 * Absolute path to editorial entity
 */


exports.getEditorialHref = getEditorialHref;

var getFullEditorialHref = function getFullEditorialHref(layout, slug) {
  var layoutType = getPreSlugPath(layout);
  return "".concat(APP_URL, "/").concat(layoutType, "/").concat(slug);
};
/**
 * Absolute path to artsy entity
 */


exports.getFullEditorialHref = getFullEditorialHref;

var getFullArtsyHref = function getFullArtsyHref(slug) {
  return "".concat(APP_URL, "/").concat(slug);
};
/**
 * ByLine helpers
 * TODO: Move this into some kind of utils folder
 */


exports.getFullArtsyHref = getFullArtsyHref;

var getAuthorByline = function getAuthorByline(authors) {
  var isEditoral = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var authorCount = Number(authors && authors.length);

  if (authorCount === 1) {
    return authors[0].name || "";
  } else if (authorCount > 1) {
    var names = authors.reduce(function (prev, curr, i) {
      var delim;
      var len = authors.length;

      if (i === len - 1) {
        delim = " and ";
      } else if (i === 0) {
        delim = "";
      } else {
        delim = ", ";
      }

      return prev + delim + curr.name;
    }, "");
    return names; // No Author
  } else if (isEditoral) {
    return "Artsy Editors";
  }
};

exports.getAuthorByline = getAuthorByline;

var getDate = function getDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";

  var today = _luxon.DateTime.local();

  var dateTime = _luxon.DateTime.fromISO(date).setZone("America/New_York");

  var isToday = today.hasSame(dateTime, "day");
  var isThisYear = today.hasSame(dateTime, "year");
  var amPm = dateTime.hour >= 12 ? "pm" : "am";
  var minutes = dateTime.minute < 10 ? "0" + dateTime.minute : dateTime.minute;
  var monthDay = "".concat(dateTime.monthShort, " ").concat(dateTime.day);
  var monthDayYear = "".concat(dateTime.monthShort, " ").concat(dateTime.day, ", ").concat(dateTime.year);
  var hour;

  if (dateTime.hour > 12) {
    hour = dateTime.hour - 12;
  } else if (dateTime.hour === 0) {
    hour = 12;
  } else {
    hour = dateTime.hour;
  }

  var time = "".concat(hour, ":").concat(minutes).concat(amPm);

  switch (format) {
    case "monthDay":
      return monthDay;

    case "monthYear":
      return "".concat(dateTime.monthShort, " ").concat(dateTime.year);

    case "condensed":
      return monthDayYear;

    case "verbose":
      var day = isToday ? "Today" : monthDayYear;
      return "".concat(day, " at ").concat(time);

    case "news":
      return isToday ? "Today" : isThisYear ? monthDay : monthDayYear;

    default:
      return "".concat(dateTime.monthShort, " ").concat(dateTime.day, ", ").concat(dateTime.year, " ").concat(time);
  }
};

exports.getDate = getDate;

var getCurrentUnixTimestamp = function getCurrentUnixTimestamp() {
  return _luxon.DateTime.local().toMillis();
};

exports.getCurrentUnixTimestamp = getCurrentUnixTimestamp;

var getMediaDate = function getMediaDate(article) {
  var published_at = article.published_at,
      scheduled_publish_at = article.scheduled_publish_at,
      media = article.media;
  var release_date = media.release_date;

  if (release_date) {
    return release_date;
  } else {
    return published_at || scheduled_publish_at;
  }
};

exports.getMediaDate = getMediaDate;

var formatTime = function formatTime(time) {
  var minutes = Math.floor(time / 60) % 60;
  var seconds = Math.floor(time % 60);
  minutes = minutes <= 0 ? 0 : minutes;
  seconds = seconds <= 0 ? 0 : seconds;
  var minutesStr = minutes < 10 ? "0" + minutes : minutes;
  var secondsStr = seconds < 10 ? "0" + seconds : seconds;
  return minutesStr + ":" + secondsStr;
};

exports.formatTime = formatTime;

var getArtsySlugsFromArticle = function getArtsySlugsFromArticle(article) {
  var articleBody = article.sections ? article.sections.map(function (section) {
    if (section.type === "text") {
      return section.body;
    }
  }).join() : "";
  var artists = (0, _uniq2.default)(getArtsySlugsFromHTML(articleBody, "artist"));
  var genes = (0, _uniq2.default)(getArtsySlugsFromHTML(articleBody, "gene"));
  return {
    artists: artists,
    genes: genes
  };
};

exports.getArtsySlugsFromArticle = getArtsySlugsFromArticle;

var getArtsySlugsFromHTML = function getArtsySlugsFromHTML(html, model) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, "text/html");
  var slugs = [];
  doc.querySelectorAll("a").forEach(function (anchor) {
    var href = anchor.getAttribute("href");

    if (href && href.match("artsy.net/".concat(model))) {
      slugs.push((0, _last2.default)(_url.default.parse(href).pathname.split("/")));
    }
  });
  return (0, _compact2.default)(slugs);
};

exports.getArtsySlugsFromHTML = getArtsySlugsFromHTML;
//# sourceMappingURL=Constants.js.map