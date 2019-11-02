import { ConcreteRequest } from "relay-runtime";
export declare type FollowGeneInput = {
    readonly gene_id?: string | null;
    readonly clientMutationId?: string | null;
};
export declare type SuggestedGenesFollowGeneMutationVariables = {
    readonly input: FollowGeneInput;
    readonly excludedGeneIds: ReadonlyArray<string | null>;
};
export declare type SuggestedGenesFollowGeneMutationResponse = {
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
export declare type SuggestedGenesFollowGeneMutation = {
    readonly response: SuggestedGenesFollowGeneMutationResponse;
    readonly variables: SuggestedGenesFollowGeneMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
