"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadataForMedium = getMetadataForMedium;

function getMetadataForMedium(medium) {
  var title = "";
  var mediumDescription = "";

  switch (medium) {
    case "painting":
      title = "Paintings";
      mediumDescription = "250,000 paintings";
      break;

    case "photography":
      title = "Photography";
      mediumDescription = "140,000 photographs";
      break;

    case "sculptures":
      title = "Sculptures";
      mediumDescription = "90,000 sculptures";
      break;

    case "prints":
      title = "Prints";
      mediumDescription = "75,000 prints";
      break;

    case "work-on-paper":
      title = "Works on Paper";
      mediumDescription = "80,000 works on paper";
      break;

    case "drawing":
      title = "Drawings";
      mediumDescription = "32,000 drawings";
      break;

    case "design":
      title = "Design Works";
      mediumDescription = "16,000 design works";
      break;

    case "installation":
      title = "Installations";
      mediumDescription = "13,000 installations";
      break;

    case "film-slash-video":
      title = "Films & Videos";
      mediumDescription = "4,000 Films & Videos works";
      break;

    case "jewelry":
      title = "Jewelry";
      mediumDescription = "3,000 pieces of jewelry";
      break;

    case "performance-art":
      title = "Performance Art Works";
      mediumDescription = "3,000 performance art works";

    default:
      null;
  }

  if (title && mediumDescription) {
    return {
      title: "".concat(title, " - For Sale on Artsy"),
      breadcrumbTitle: title,
      description: "Buy, bid, and inquire on over ".concat(mediumDescription, " on Artsy, the world\u2019s largest online marketplace for art and design.")
    };
  } else {
    return {
      title: "Collect | Artsy",
      breadcrumbTitle: "Collect",
      description: "Find artworks by subject matter, style/technique, movement, price, and gallery/institution."
    };
  }
}
//# sourceMappingURL=CollectMediumMetadata.js.map