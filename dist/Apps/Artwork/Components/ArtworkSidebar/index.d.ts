import React, { Component } from "react";
import { ArtworkSidebar_artwork } from "__generated__/ArtworkSidebar_artwork.graphql";
export interface ArtworkSidebarProps {
    artwork: ArtworkSidebar_artwork;
}
export declare class ArtworkSidebar extends Component<ArtworkSidebarProps> {
    render(): JSX.Element;
}
export declare const ArtworkSidebarFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarProps, "artwork">> & import("react-relay").ComponentRef>;
export declare const ArtworkSidebarQueryRenderer: ({ artworkID, }: {
    artworkID: string;
}) => JSX.Element;
