import React from "react";
import { ArtworkSidebarTitleInfo_artwork } from "__generated__/ArtworkSidebarTitleInfo_artwork.graphql";
export interface ArtworkSidebarTitleInfoProps {
    artwork: ArtworkSidebarTitleInfo_artwork;
}
export declare class ArtworkSidebarTitleInfo extends React.Component<ArtworkSidebarTitleInfoProps> {
    render(): JSX.Element;
}
export declare const ArtworkSidebarTitleInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarTitleInfoProps, "artwork">> & import("react-relay").ComponentRef>;
