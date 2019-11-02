"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.map");

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_ITERATIONS = 1000;
/**
 * Scales an image object proportionally based on a direction (either -1 or 1)
 * @param img a dimension object that references an artwork image
 * @param dir the direction we need to scale an image, either -1 or 1
 */

var resizeHeight = function resizeHeight(img, dir) {
  img.width += img.width / img.height * dir;
  img.height += dir;
};

var fillwidthDimensions = function fillwidthDimensions(items, containerWidth) {
  var gutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var targetHeight = arguments.length > 3 ? arguments[3] : undefined;

  var totalWhitespace = function totalWhitespace() {
    return (items.length - 1) * gutter;
  };

  var widthDiff = function widthDiff(dim) {
    var currentWidth = (0, _reduce2.default)(dim, function (sum, img) {
      return sum + img.width;
    }, 0);
    return containerWidth - currentWidth - totalWhitespace();
  }; // Get initial dimensions based on the targetHeight


  var dimensions = items.map(function (item) {
    var id;
    var aspectRatio; // Set id and aspectRatio for Relay or publishing

    if (item.node) {
      id = item.node.__id;
      aspectRatio = item.node.image && item.node.image.aspect_ratio;
    } else {
      id = item.url ? item.url : item.image;
      aspectRatio = item.width / item.height;
    }

    return {
      __id: id,
      width: targetHeight * aspectRatio,
      height: targetHeight
    };
  }); // If the total width difference is too small or negative we need to scale down. If not, scale up.

  var dir = widthDiff(dimensions) < 1 ? -1 : 1; // Keep looping until we get an acceptable width difference

  var count = 0;

  while (widthDiff(dimensions) <= 1) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dimensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var img = _step.value;
        resizeHeight(img, dir);

        if (widthDiff(dimensions) > 1) {
          break;
        }
      } // Seeing as there have been a couple of bugs in this code and there are no proper tests yet, let’s at least make
      // sure to no longer run into infinite loops.

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

    count++;

    if (count === MAX_ITERATIONS) {
      var data = {
        items: items,
        containerWidth: containerWidth,
        gutter: gutter,
        targetHeight: targetHeight,
        dir: dir,
        dimensions: dimensions
      };
      console.error("Was unable to calculate a filling width for data: ".concat(JSON.stringify(data)));
      break;
    }
  } // Round image dimensions to whole numbers


  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = dimensions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _img = _step2.value;
      _img.width = Math.floor(_img.width);
      _img.height = Math.floor(_img.height);

      if (widthDiff(dimensions) === 0) {
        break;
      }
    } // Voila, sizes for our images

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return dimensions;
};

var _default = fillwidthDimensions;
exports.default = _default;
//# sourceMappingURL=fillwidth.js.map