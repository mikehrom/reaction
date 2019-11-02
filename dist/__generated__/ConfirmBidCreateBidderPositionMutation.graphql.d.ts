import { ConcreteRequest } from "relay-runtime";
export declare type BidderPositionInput = {
    readonly sale_id: string;
    readonly artwork_id: string;
    readonly max_bid_amount_cents: number;
    readonly clientMutationId?: string | null;
};
export declare type ConfirmBidCreateBidderPositionMutationVariables = {
    readonly input: BidderPositionInput;
};
export declare type ConfirmBidCreateBidderPositionMutationResponse = {
    readonly createBidderPosition: ({
        readonly result: ({
            readonly position: ({
                readonly id: string;
            }) | null;
            readonly status: string;
            readonly message_header: string | null;
            readonly message_description_md: string | null;
        }) | null;
    }) | null;
};
export declare type ConfirmBidCreateBidderPositionMutation = {
    readonly response: ConfirmBidCreateBidderPositionMutationResponse;
    readonly variables: ConfirmBidCreateBidderPositionMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
