import React from "react";
import { RelayRefetchProp } from "react-relay";
import { ArtworkFilterArtworkGrid2_filtered_artworks } from "__generated__/ArtworkFilterArtworkGrid2_filtered_artworks.graphql";
interface ArtworkFilterArtworkGridProps {
    columnCount: number[];
    filtered_artworks: ArtworkFilterArtworkGrid2_filtered_artworks;
    isLoading?: boolean;
    relay: RelayRefetchProp;
}
export declare const ArtworkFilterArtworkGridRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkFilterArtworkGridProps, "columnCount" | "isLoading" | "filtered_artworks">> & import("react-relay").ComponentRef>;
export {};
