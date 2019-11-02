import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { PaymentPicker_order$ref } from "./PaymentPicker_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
declare const _Payment_order$ref: unique symbol;
export declare type Payment_order$ref = typeof _Payment_order$ref;
export declare type Payment_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $fragmentRefs": PaymentPicker_order$ref & ArtworkSummaryItem_order$ref & TransactionDetailsSummaryItem_order$ref;
    readonly " $refType": Payment_order$ref;
};
declare const node: ConcreteFragment;
export default node;
