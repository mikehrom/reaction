import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { CreditCardSummaryItem_order$ref } from "./CreditCardSummaryItem_order.graphql";
import { ItemReview_lineItem$ref } from "./ItemReview_lineItem.graphql";
import { OfferSummaryItem_order$ref } from "./OfferSummaryItem_order.graphql";
import { ShippingSummaryItem_order$ref } from "./ShippingSummaryItem_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
declare const _Review_order$ref: unique symbol;
export declare type Review_order$ref = typeof _Review_order$ref;
export declare type Review_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly itemsTotal: string | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                    readonly _id: string;
                    readonly artists: ReadonlyArray<({
                        readonly id: string;
                    }) | null> | null;
                }) | null;
                readonly " $fragmentRefs": ItemReview_lineItem$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly myLastOffer?: ({
        readonly id: string;
    }) | null;
    readonly " $fragmentRefs": ArtworkSummaryItem_order$ref & TransactionDetailsSummaryItem_order$ref & ShippingSummaryItem_order$ref & CreditCardSummaryItem_order$ref & OfferSummaryItem_order$ref;
    readonly " $refType": Review_order$ref;
};
declare const node: ConcreteFragment;
export default node;
