import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
declare const _Reject_order$ref: unique symbol;
export declare type Reject_order$ref = typeof _Reject_order$ref;
export declare type Reject_order = {
    readonly id: string;
    readonly stateExpiresAt: string | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly lastOffer?: ({
        readonly id: string;
        readonly createdAt: string;
    }) | null;
    readonly " $fragmentRefs": ArtworkSummaryItem_order$ref;
    readonly " $refType": Reject_order$ref;
};
declare const node: ConcreteFragment;
export default node;
