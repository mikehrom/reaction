import { ArtworkBanner_artwork } from "__generated__/ArtworkBanner_artwork.graphql";
import React from "react";
export interface ArtworkBannerProps {
    artwork: ArtworkBanner_artwork;
}
export declare const ArtworkBanner: React.SFC<ArtworkBannerProps>;
export declare const ArtworkBannerFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkBannerProps, "artwork">> & import("react-relay").ComponentRef>;
export declare const ArtworkBannerQueryRenderer: ({ artworkID, }: {
    artworkID: string;
}) => JSX.Element;
