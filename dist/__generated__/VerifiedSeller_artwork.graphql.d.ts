import { ConcreteFragment } from "relay-runtime";
declare const _VerifiedSeller_artwork$ref: unique symbol;
export declare type VerifiedSeller_artwork$ref = typeof _VerifiedSeller_artwork$ref;
export declare type VerifiedSeller_artwork = {
    readonly is_biddable: boolean | null;
    readonly partner: ({
        readonly isVerifiedSeller: boolean | null;
        readonly name: string | null;
    }) | null;
    readonly " $refType": VerifiedSeller_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
