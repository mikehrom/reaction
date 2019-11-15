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
                readonly sale_artwork: ({
                    readonly sale: ({
                        readonly registrationStatus: ({
                            readonly id: string;
                        }) | null;
                    }) | null;
                }) | null;
            }) | null;
            readonly status: string;
            readonly messageHeader: string | null;
        }) | null;
    }) | null;
};
export declare type ConfirmBidCreateBidderPositionMutation = {
    readonly response: ConfirmBidCreateBidderPositionMutationResponse;
    readonly variables: ConfirmBidCreateBidderPositionMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
