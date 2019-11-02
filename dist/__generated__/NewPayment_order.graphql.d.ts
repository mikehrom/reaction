import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { PaymentPicker_order$ref } from "./PaymentPicker_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
declare const _NewPayment_order$ref: unique symbol;
export declare type NewPayment_order$ref = typeof _NewPayment_order$ref;
export declare type NewPayment_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly stateExpiresAt: string | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                    readonly artists: ReadonlyArray<({
                        readonly id: string;
                    }) | null> | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly lastOffer?: ({
        readonly createdAt: string;
        readonly id: string;
        readonly note: string | null;
    }) | null;
    readonly " $fragmentRefs": PaymentPicker_order$ref & ArtworkSummaryItem_order$ref & TransactionDetailsSummaryItem_order$ref;
    readonly " $refType": NewPayment_order$ref;
};
declare const node: ConcreteFragment;
export default node;
