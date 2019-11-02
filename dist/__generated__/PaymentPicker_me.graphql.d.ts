import { ConcreteFragment } from "relay-runtime";
declare const _PaymentPicker_me$ref: unique symbol;
export declare type PaymentPicker_me$ref = typeof _PaymentPicker_me$ref;
export declare type PaymentPicker_me = {
    readonly creditCards: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id: string;
                readonly brand: string;
                readonly last_digits: string;
                readonly expiration_month: number;
                readonly expiration_year: number;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": PaymentPicker_me$ref;
};
declare const node: ConcreteFragment;
export default node;
