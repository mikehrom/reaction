import React from "react";
import { ArtworkSidebarMetadata_artwork } from "__generated__/ArtworkSidebarMetadata_artwork.graphql";
export interface ArtworkSidebarMetadataProps {
    artwork: ArtworkSidebarMetadata_artwork;
}
export declare class ArtworkSidebarMetadata extends React.Component<ArtworkSidebarMetadataProps> {
    render(): JSX.Element;
}
export declare const ArtworkSidebarMetadataFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarMetadataProps, "artwork">> & import("react-relay").ComponentRef>;
