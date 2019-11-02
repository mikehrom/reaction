import { ConcreteFragment } from "relay-runtime";
declare const _SecurePayment_artwork$ref: unique symbol;
export declare type SecurePayment_artwork$ref = typeof _SecurePayment_artwork$ref;
export declare type SecurePayment_artwork = {
    readonly is_acquireable: boolean | null;
    readonly is_offerable: boolean | null;
    readonly " $refType": SecurePayment_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
