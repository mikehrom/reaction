import { CollectionsRail_collections } from "__generated__/CollectionsRail_collections.graphql";
import React from "react";
interface CollectionRailsProps {
    collections: CollectionsRail_collections;
}
export declare class CollectionsRail extends React.Component<CollectionRailsProps> {
    trackImpression(): void;
    render(): JSX.Element;
}
export declare const CollectionsRailFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionRailsProps, "collections">> & import("react-relay").ComponentRef>;
export {};
