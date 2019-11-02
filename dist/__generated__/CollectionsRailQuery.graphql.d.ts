import { ConcreteRequest } from "relay-runtime";
import { CollectionsRail_collections$ref } from "./CollectionsRail_collections.graphql";
export declare type CollectionsRailQueryVariables = {
    readonly showOnEditorial?: boolean | null;
    readonly size?: number | null;
    readonly randomizationSeed?: string | null;
};
export declare type CollectionsRailQueryResponse = {
    readonly collections: ReadonlyArray<{
        readonly " $fragmentRefs": CollectionsRail_collections$ref;
    }>;
};
export declare type CollectionsRailQuery = {
    readonly response: CollectionsRailQueryResponse;
    readonly variables: CollectionsRailQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
