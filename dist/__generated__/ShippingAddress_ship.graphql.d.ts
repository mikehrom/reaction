import { ConcreteFragment } from "relay-runtime";
declare const _ShippingAddress_ship$ref: unique symbol;
export declare type ShippingAddress_ship$ref = typeof _ShippingAddress_ship$ref;
export declare type ShippingAddress_ship = {
    readonly name: string | null;
    readonly addressLine1: string | null;
    readonly addressLine2: string | null;
    readonly city: string | null;
    readonly postalCode: string | null;
    readonly region: string | null;
    readonly country: string | null;
    readonly phoneNumber: string | null;
    readonly " $refType": ShippingAddress_ship$ref;
};
declare const node: ConcreteFragment;
export default node;
