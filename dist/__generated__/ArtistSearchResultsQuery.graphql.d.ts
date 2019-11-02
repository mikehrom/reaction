import { ConcreteRequest } from "relay-runtime";
import { ArtistSearchResults_viewer$ref } from "./ArtistSearchResults_viewer.graphql";
export declare type ArtistSearchResultsQueryVariables = {
    readonly term: string;
};
export declare type ArtistSearchResultsQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": ArtistSearchResults_viewer$ref;
    }) | null;
};
export declare type ArtistSearchResultsQuery = {
    readonly response: ArtistSearchResultsQueryResponse;
    readonly variables: ArtistSearchResultsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
