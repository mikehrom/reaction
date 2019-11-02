"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.limitWithCount = void 0;

/**
 * Helper function to limit array of strings for shorter displays
 * @param initial array of strings to chech for the limit
 * @param limit number of elements to keep
 * 
 * @example
   ```tsx
   it("returns array of limit number of elements and count of the rest", () => {
    const initial = ["let", "there", "be", "light"]
    const limit = 2
    const limited = limitWithCount(initial, limit)
    expect(limited).toEqual(["let", "there", "+2 more"]) })
   ```
 */
var limitWithCount = function limitWithCount(initial, limit) {
  if (!initial || initial.length < 1) {
    return [];
  }

  if (!limit || initial.length <= limit) {
    return initial;
  }

  var remainCount = initial.length - limit;
  var limited = initial.slice(0, limit);
  limited.push("+".concat(remainCount, " more"));
  return limited;
};

exports.limitWithCount = limitWithCount;
//# sourceMappingURL=limitWithCount.js.map