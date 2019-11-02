import { ConcreteRequest } from "relay-runtime";
import { CollectionsHubsNav_marketingHubCollections$ref } from "./CollectionsHubsNav_marketingHubCollections.graphql";
export declare type CollectionsHubsNavQueryVariables = {};
export declare type CollectionsHubsNavQueryResponse = {
    readonly marketingHubCollections: ReadonlyArray<{
        readonly " $fragmentRefs": CollectionsHubsNav_marketingHubCollections$ref;
    }>;
};
export declare type CollectionsHubsNavQuery = {
    readonly response: CollectionsHubsNavQueryResponse;
    readonly variables: CollectionsHubsNavQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
