import { ConcreteFragment } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
declare const _OrderApp_order$ref: unique symbol;
export declare type OrderApp_order$ref = typeof _OrderApp_order$ref;
export declare type OrderApp_order = {
    readonly mode: CommerceOrderModeEnum | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                    readonly is_acquireable: boolean | null;
                    readonly is_offerable: boolean | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": OrderApp_order$ref;
};
declare const node: ConcreteFragment;
export default node;
