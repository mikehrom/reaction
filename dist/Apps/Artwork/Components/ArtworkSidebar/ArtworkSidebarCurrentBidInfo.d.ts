import React from "react";
import { ArtworkSidebarCurrentBidInfo_artwork } from "__generated__/ArtworkSidebarCurrentBidInfo_artwork.graphql";
export interface ArtworkSidebarCurrentBidInfoProps {
    artwork: ArtworkSidebarCurrentBidInfo_artwork;
}
export declare class ArtworkSidebarCurrentBidInfo extends React.Component<ArtworkSidebarCurrentBidInfoProps> {
    render(): JSX.Element;
}
export declare const ArtworkSidebarCurrentBidInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarCurrentBidInfoProps, "artwork">> & import("react-relay").ComponentRef>;
