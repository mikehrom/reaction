import { ConcreteRequest } from "relay-runtime";
import { GeneSearchResults_viewer$ref } from "./GeneSearchResults_viewer.graphql";
export declare type GeneSearchResultsQueryVariables = {
    readonly term: string;
};
export declare type GeneSearchResultsQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": GeneSearchResults_viewer$ref;
    }) | null;
};
export declare type GeneSearchResultsQuery = {
    readonly response: GeneSearchResultsQueryResponse;
    readonly variables: GeneSearchResultsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
