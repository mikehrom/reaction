import React from "react";
import { ArtworkDetailsArticles_artwork } from "__generated__/ArtworkDetailsArticles_artwork.graphql";
export interface ArtworkDetailsArticlesProps {
    artwork: ArtworkDetailsArticles_artwork;
}
export declare const ArtworkDetailsArticles: React.SFC<ArtworkDetailsArticlesProps>;
export declare const ArtworkDetailsArticlesFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkDetailsArticlesProps, "artwork">> & import("react-relay").ComponentRef>;
