import { RelatedCollectionsRail_collections } from "__generated__/RelatedCollectionsRail_collections.graphql";
import React from "react";
interface RelatedCollectionsRailProps {
    collections: RelatedCollectionsRail_collections;
    title?: string;
}
export declare class RelatedCollectionsRail extends React.Component<RelatedCollectionsRailProps> {
    trackImpression(): void;
    trackCarouselNav(): void;
    render(): JSX.Element;
}
export declare const RelatedCollectionsRailFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<RelatedCollectionsRailProps, "title" | "collections">> & import("react-relay").ComponentRef>;
export {};
