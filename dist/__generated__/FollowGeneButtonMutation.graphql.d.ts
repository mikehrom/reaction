import { ConcreteRequest } from "relay-runtime";
export declare type FollowGeneInput = {
    readonly gene_id?: string | null;
    readonly clientMutationId?: string | null;
};
export declare type FollowGeneButtonMutationVariables = {
    readonly input: FollowGeneInput;
};
export declare type FollowGeneButtonMutationResponse = {
    readonly followGene: ({
        readonly gene: ({
            readonly __id: string;
            readonly is_followed: boolean | null;
        }) | null;
    }) | null;
};
export declare type FollowGeneButtonMutation = {
    readonly response: FollowGeneButtonMutationResponse;
    readonly variables: FollowGeneButtonMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
