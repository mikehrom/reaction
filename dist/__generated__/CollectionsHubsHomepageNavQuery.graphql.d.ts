import { ConcreteRequest } from "relay-runtime";
import { CollectionsHubsHomepageNav_marketingHubCollections$ref } from "./CollectionsHubsHomepageNav_marketingHubCollections.graphql";
export declare type CollectionsHubsHomepageNavQueryVariables = {};
export declare type CollectionsHubsHomepageNavQueryResponse = {
    readonly marketingHubCollections: ReadonlyArray<{
        readonly " $fragmentRefs": CollectionsHubsHomepageNav_marketingHubCollections$ref;
    }>;
};
export declare type CollectionsHubsHomepageNavQuery = {
    readonly response: CollectionsHubsHomepageNavQueryResponse;
    readonly variables: CollectionsHubsHomepageNavQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
