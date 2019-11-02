import { ConcreteRequest } from "relay-runtime";
import { Artists_gene$ref } from "./Artists_gene.graphql";
export declare type GeneContentsArtistsQueryVariables = {
    readonly geneID: string;
};
export declare type GeneContentsArtistsQueryResponse = {
    readonly gene: ({
        readonly " $fragmentRefs": Artists_gene$ref;
    }) | null;
};
export declare type GeneContentsArtistsQuery = {
    readonly response: GeneContentsArtistsQueryResponse;
    readonly variables: GeneContentsArtistsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
