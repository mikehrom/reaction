import React from "react";
import { SeoDataForArtwork_artwork } from "__generated__/SeoDataForArtwork_artwork.graphql";
interface SeoDataForArtworkProps {
    artwork: SeoDataForArtwork_artwork;
}
export declare const AVAILABILITY: {
    "for sale": string;
    sold: string;
};
export declare const SeoDataForArtwork: React.FC<SeoDataForArtworkProps>;
export declare const SeoDataForArtworkFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<SeoDataForArtworkProps, "artwork">> & import("react-relay").ComponentRef>;
export {};
