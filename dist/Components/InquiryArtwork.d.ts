import { InquiryArtwork_artwork } from "__generated__/InquiryArtwork_artwork.graphql";
import React from "react";
import { ArtworkProps } from "./Artwork";
export declare const InquiryArtwork: React.SFC<ArtworkProps & {
    artwork: InquiryArtwork_artwork;
}>;
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkProps & {
    artwork: InquiryArtwork_artwork;
}, "onSelect" | "artwork" | "extended" | "Overlay" | "showOverlayOnHover">> & import("react-relay").ComponentRef>;
export default _default;
