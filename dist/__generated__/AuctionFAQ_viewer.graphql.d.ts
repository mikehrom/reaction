import { ConcreteFragment } from "relay-runtime";
declare const _AuctionFAQ_viewer$ref: unique symbol;
export declare type AuctionFAQ_viewer$ref = typeof _AuctionFAQ_viewer$ref;
export declare type AuctionFAQ_viewer = {
    readonly bidding: ({
        readonly content: string | null;
    }) | null;
    readonly buyersPremiumTaxesAndFees: ({
        readonly content: string | null;
    }) | null;
    readonly paymentsAndShipping: ({
        readonly content: string | null;
    }) | null;
    readonly emailsAndAlerts: ({
        readonly content: string | null;
    }) | null;
    readonly conditionsOfSale: ({
        readonly content: string | null;
    }) | null;
    readonly " $refType": AuctionFAQ_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
