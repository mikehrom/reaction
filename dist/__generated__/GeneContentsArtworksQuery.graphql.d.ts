import { ConcreteRequest } from "relay-runtime";
import { GeneArtworks_gene$ref } from "./GeneArtworks_gene.graphql";
export declare type GeneContentsArtworksQueryVariables = {
    readonly geneID: string;
    readonly medium?: string | null;
    readonly price_range?: string | null;
    readonly sort?: string | null;
    readonly for_sale?: boolean | null;
    readonly dimension_range?: string | null;
};
export declare type GeneContentsArtworksQueryResponse = {
    readonly gene: ({
        readonly " $fragmentRefs": GeneArtworks_gene$ref;
    }) | null;
};
export declare type GeneContentsArtworksQuery = {
    readonly response: GeneContentsArtworksQueryResponse;
    readonly variables: GeneContentsArtworksQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
