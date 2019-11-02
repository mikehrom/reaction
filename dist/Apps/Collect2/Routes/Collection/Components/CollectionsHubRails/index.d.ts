import { CollectionsHubRails_linkedCollections } from "__generated__/CollectionsHubRails_linkedCollections.graphql";
import React from "react";
interface Props {
    linkedCollections: CollectionsHubRails_linkedCollections;
}
export declare const CollectionsHubRails: ({ linkedCollections }: Props) => JSX.Element;
export declare const CollectionsHubRailsContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "linkedCollections">> & import("react-relay").ComponentRef>;
export {};
