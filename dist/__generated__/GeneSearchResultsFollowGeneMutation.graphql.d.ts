import { ConcreteRequest } from "relay-runtime";
export declare type FollowGeneInput = {
    readonly gene_id?: string | null;
    readonly clientMutationId?: string | null;
};
export declare type GeneSearchResultsFollowGeneMutationVariables = {
    readonly input: FollowGeneInput;
    readonly excludedGeneIds: ReadonlyArray<string | null>;
};
export declare type GeneSearchResultsFollowGeneMutationResponse = {
    readonly followGene: ({
        readonly gene: ({
            readonly similar: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly id: string;
                        readonly _id: string;
                        readonly __id: string;
                        readonly name: string | null;
                        readonly image: ({
                            readonly cropped: ({
                                readonly url: string | null;
                            }) | null;
                        }) | null;
                    }) | null;
                }) | null> | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type GeneSearchResultsFollowGeneMutation = {
    readonly response: GeneSearchResultsFollowGeneMutationResponse;
    readonly variables: GeneSearchResultsFollowGeneMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
