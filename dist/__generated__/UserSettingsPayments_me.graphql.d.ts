import { ConcreteFragment } from "relay-runtime";
declare const _UserSettingsPayments_me$ref: unique symbol;
export declare type UserSettingsPayments_me$ref = typeof _UserSettingsPayments_me$ref;
export declare type UserSettingsPayments_me = {
    readonly __id: string;
    readonly id: string;
    readonly creditCards: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
                readonly id: string;
                readonly brand: string;
                readonly last_digits: string;
                readonly expiration_year: number;
                readonly expiration_month: number;
                readonly __typename: string;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": UserSettingsPayments_me$ref;
};
declare const node: ConcreteFragment;
export default node;
