import { ConcreteRequest } from "relay-runtime";
export declare type BidderPositionQueryVariables = {
    readonly bidderPositionID: string;
};
export declare type BidderPositionQueryResponse = {
    readonly me: ({
        readonly bidderPosition: ({
            readonly status: string;
            readonly messageHeader: string | null;
            readonly position: ({
                readonly id: string;
                readonly suggestedNextBid: ({
                    readonly cents: number | null;
                    readonly display: string | null;
                }) | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type BidderPositionQuery = {
    readonly response: BidderPositionQueryResponse;
    readonly variables: BidderPositionQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
