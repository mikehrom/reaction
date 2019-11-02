import { Location } from "found";
import React from "react";
import { ArtworkFilter_viewer } from "__generated__/ArtworkFilter_viewer.graphql";
interface SearchResultsRouteProps {
    viewer: ArtworkFilter_viewer;
    location: Location;
}
export declare const SearchResultsArtworksRoute: React.FC<SearchResultsRouteProps>;
export {};
