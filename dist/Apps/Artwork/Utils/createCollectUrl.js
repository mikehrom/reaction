"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCollectUrl = void 0;

require("core-js/modules/es6.array.filter");

var qs = _interopRequireWildcard(require("qs"));

var _sharify = require("sharify");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var createCollectUrl = function createCollectUrl(_ref) {
  var dimension = _ref.dimension,
      category = _ref.category,
      artistId = _ref.artistId;
  var dimensionRange; // This calculation is based on size_score. See definitions of small/medium/large
  // here: https://github.com/artsy/vortex/blob/f3f605578832773225e08af8b5c0d69424e1d653/dbt/models/sales/price_records.sql

  if (dimension === "SMALL") {
    dimensionRange = "*-15.7";
  } else if (dimension === "MEDIUM") {
    dimensionRange = "15.7-27.6";
  } else if (dimension === "LARGE") {
    dimensionRange = "27.6-*";
  } else {
    dimensionRange = "*-*";
  }

  var query = qs.stringify({
    page: 1,
    sort: "-decayed_merch",
    acquireable: "true",
    offerable: "true",
    inquireable_only: "true",
    dimension_range: dimensionRange,
    artist_id: artistId
  });
  var path = [_sharify.data.APP_URL, "collect", filterCategories[category]].filter(Boolean).join("/");
  return "".concat(path, "?").concat(query);
};

exports.createCollectUrl = createCollectUrl;
// these come from MediumFilter.tsx
var filterCategories = {
  Architecture: "architecture",
  "Books and Portfolios": "books-and-portfolios",
  "Design/Decorative Art": "design",
  "Drawing, Collage or other Work on Paper": "work-on-paper",
  "Fashion Design and Wearable Art": "fashion-design-and-wearable-art",
  Installation: "installation",
  Jewelry: "jewelry",
  "Mixed Media": "mixed-media",
  Other: "",
  Painting: "painting",
  "Performance Art": "performance-art",
  Photography: "photography",
  Posters: "poster",
  Print: "prints",
  Sculpture: "sculpture",
  Sound: "",
  "Textile Arts": "textiles",
  "Video/Film/Animation": "film-slash-video",
  "Work on Paper": "work-on-paper"
};
//# sourceMappingURL=createCollectUrl.js.map