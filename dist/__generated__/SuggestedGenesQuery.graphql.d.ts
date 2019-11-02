import { ConcreteRequest } from "relay-runtime";
import { SuggestedGenes_suggested_genes$ref } from "./SuggestedGenes_suggested_genes.graphql";
export declare type SuggestedGenesQueryVariables = {};
export declare type SuggestedGenesQueryResponse = {
    readonly suggested_genes: ReadonlyArray<({
        readonly " $fragmentRefs": SuggestedGenes_suggested_genes$ref;
    }) | null> | null;
};
export declare type SuggestedGenesQuery = {
    readonly response: SuggestedGenesQueryResponse;
    readonly variables: SuggestedGenesQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
