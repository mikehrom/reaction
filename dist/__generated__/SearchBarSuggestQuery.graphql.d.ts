import { ConcreteRequest } from "relay-runtime";
import { SearchBar_viewer$ref } from "./SearchBar_viewer.graphql";
export declare type SearchBarSuggestQueryVariables = {
    readonly term: string;
    readonly hasTerm: boolean;
};
export declare type SearchBarSuggestQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": SearchBar_viewer$ref;
    }) | null;
};
export declare type SearchBarSuggestQuery = {
    readonly response: SearchBarSuggestQueryResponse;
    readonly variables: SearchBarSuggestQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
