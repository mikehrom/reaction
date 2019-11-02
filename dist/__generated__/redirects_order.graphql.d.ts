import { ConcreteFragment } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _redirects_order$ref: unique symbol;
export declare type redirects_order$ref = typeof _redirects_order$ref;
export declare type redirects_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly state: CommerceOrderStateEnum;
    readonly lastTransactionFailed: boolean | null;
    readonly requestedFulfillment: ({
        readonly __typename: string;
    }) | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly creditCard: ({
        readonly id: string;
    }) | null;
    readonly myLastOffer?: ({
        readonly id: string;
        readonly createdAt: string;
    }) | null;
    readonly lastOffer?: ({
        readonly id: string;
        readonly createdAt: string;
    }) | null;
    readonly awaitingResponseFrom?: CommerceOrderParticipantEnum | null;
    readonly " $refType": redirects_order$ref;
};
declare const node: ConcreteFragment;
export default node;
