"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEditorialSponsored = void 0;

require("core-js/modules/es6.array.some");

var isEditorialSponsored = function isEditorialSponsored(sponsor) {
  return ["partner_condensed_logo", "partner_dark_logo", "partner_light_logo", "partner_logo_link", "pixel_tracking_code"].some(function (editorialProperty) {
    return sponsor && sponsor[editorialProperty] != null;
  });
};

exports.isEditorialSponsored = isEditorialSponsored;
//# sourceMappingURL=Sponsored.js.map