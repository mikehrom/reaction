import { ConcreteRequest } from "relay-runtime";
import { TagArtworks_tag$ref } from "./TagArtworks_tag.graphql";
export declare type TagContentsArtworksQueryVariables = {
    readonly tagID: string;
    readonly medium?: string | null;
    readonly price_range?: string | null;
    readonly sort?: string | null;
    readonly for_sale?: boolean | null;
    readonly dimension_range?: string | null;
};
export declare type TagContentsArtworksQueryResponse = {
    readonly tag: ({
        readonly " $fragmentRefs": TagArtworks_tag$ref;
    }) | null;
};
export declare type TagContentsArtworksQuery = {
    readonly response: TagContentsArtworksQueryResponse;
    readonly variables: TagContentsArtworksQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
