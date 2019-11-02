"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterLocations = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.map");

/**
 * Helper function to filter out blank and duplicate location names
 * @param locations collection of location objects to filter
 */
var filterLocations = function filterLocations(locations) {
  if (!locations || locations.length < 1) {
    return null;
  }

  var locationCities = locations.map(function (location, index) {
    return location.city;
  });
  var filteredForDuplicatesAndBlanks = locationCities.filter(function (city, pos) {
    return city && locationCities.indexOf(city) === pos && city.length > 0;
  });
  return filteredForDuplicatesAndBlanks;
};

exports.filterLocations = filterLocations;
//# sourceMappingURL=filterLocations.js.map