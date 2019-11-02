import { CollectionsHubsNav_marketingHubCollections } from "__generated__/CollectionsHubsNav_marketingHubCollections.graphql";
import React, { FC } from "react";
interface CollectionsHubsNavProps {
    marketingHubCollections: CollectionsHubsNav_marketingHubCollections;
}
export declare const CollectionsHubsNav: FC<CollectionsHubsNavProps>;
export declare const CollectionsHubsNavFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectionsHubsNavProps, "marketingHubCollections">> & import("react-relay").ComponentRef>;
export {};
