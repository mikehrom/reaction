"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Truncator = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _ErrorBoundary = require("./ErrorBoundary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Truncate large bodies of text.
 * If you need to truncate a single line, consider using `text-overflow: ellipsis`.
 */
var Truncator = function Truncator(_ref) {
  var ReadMoreLink = _ref.ReadMoreLink,
      children = _ref.children,
      ellipsis = _ref.ellipsis,
      maxLineCount = _ref.maxLineCount;

  var html = _server.default.renderToStaticMarkup(_react.default.createElement("span", null, children));

  var readMoreHTML = null;

  if (ReadMoreLink) {
    readMoreHTML = _server.default.renderToStaticMarkup(ReadMoreLink());
  } // FIXME: Make safe for tests


  var HTMLEllipsis;

  if (process.env.NODE_ENV !== "test") {
    var responsiveHOC = require("react-lines-ellipsis/lib/responsiveHOC");

    HTMLEllipsis = responsiveHOC()(require("react-lines-ellipsis/lib/html"));
  } else {
    HTMLEllipsis = function HTMLEllipsis(_ref2) {
      var unsafeHTML = _ref2.unsafeHTML;
      return _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: unsafeHTML
        }
      });
    };
  }

  return _react.default.createElement(_ErrorBoundary.ErrorBoundary, null, _react.default.createElement(HTMLEllipsis, {
    unsafeHTML: html,
    maxLine: String(maxLineCount || 2),
    ellipsis: ellipsis,
    ellipsisHTML: readMoreHTML
  }));
};

exports.Truncator = Truncator;
//# sourceMappingURL=Truncator.js.map