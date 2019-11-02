import { ConcreteRequest } from "relay-runtime";
export declare type CreateBidderInput = {
    readonly sale_id: string;
    readonly clientMutationId?: string | null;
};
export declare type RegisterCreateBidderMutationVariables = {
    readonly input: CreateBidderInput;
};
export declare type RegisterCreateBidderMutationResponse = {
    readonly createBidder: ({
        readonly bidder: ({
            readonly id: string;
        }) | null;
    }) | null;
};
export declare type RegisterCreateBidderMutation = {
    readonly response: RegisterCreateBidderMutationResponse;
    readonly variables: RegisterCreateBidderMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
