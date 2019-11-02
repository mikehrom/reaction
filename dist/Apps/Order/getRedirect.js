"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRedirect = getRedirect;
exports.trimLeadingSlashes = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.regexp.replace");

var trimLeadingSlashes = function trimLeadingSlashes(s) {
  return s.replace(/^\/+/, "");
};

exports.trimLeadingSlashes = trimLeadingSlashes;

function getRedirect(redirects, location, args) {
  var trimmedLocation = trimLeadingSlashes(location);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = redirects.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var rule = _step.value;
      var redirect = rule(args);

      if (redirect) {
        return redirect;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (trimmedLocation.length > 0 && redirects.children) {
    // find most specific matching child (i.e. longest path match)
    var matchingChild = redirects.children.filter(function (child) {
      return trimmedLocation.startsWith(child.path);
    }).sort(function (a, b) {
      return a.path.split("/").length - b.path.split("/").length;
    }).pop();

    if (matchingChild) {
      return getRedirect(matchingChild, trimmedLocation.slice(matchingChild.path.length), args);
    }
  }

  return null;
}
//# sourceMappingURL=getRedirect.js.map