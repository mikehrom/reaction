import { ConcreteFragment } from "relay-runtime";
declare const _CreditCardSummaryItem_order$ref: unique symbol;
export declare type CreditCardSummaryItem_order$ref = typeof _CreditCardSummaryItem_order$ref;
export declare type CreditCardSummaryItem_order = {
    readonly creditCard: ({
        readonly brand: string;
        readonly last_digits: string;
        readonly expiration_year: number;
        readonly expiration_month: number;
    }) | null;
    readonly " $refType": CreditCardSummaryItem_order$ref;
};
declare const node: ConcreteFragment;
export default node;
