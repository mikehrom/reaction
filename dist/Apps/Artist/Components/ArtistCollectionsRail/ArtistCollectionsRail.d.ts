import { ArtistCollectionsRail_collections } from "__generated__/ArtistCollectionsRail_collections.graphql";
import React from "react";
interface ArtistCollectionsRailProps {
    collections: ArtistCollectionsRail_collections;
}
export declare class ArtistCollectionsRail extends React.Component<ArtistCollectionsRailProps> {
    trackImpression(): void;
    trackCarouselNav(): void;
    render(): JSX.Element;
}
export declare const ArtistCollectionsRailFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistCollectionsRailProps, "collections">> & import("react-relay").ComponentRef>;
export {};
