import { ConcreteFragment } from "relay-runtime";
declare const _Badge_artwork$ref: unique symbol;
export declare type Badge_artwork$ref = typeof _Badge_artwork$ref;
export declare type Badge_artwork = {
    readonly is_biddable: boolean | null;
    readonly is_acquireable: boolean | null;
    readonly is_offerable: boolean | null;
    readonly href: string | null;
    readonly sale: ({
        readonly is_preview: boolean | null;
        readonly display_timely_at: string | null;
    }) | null;
    readonly " $refType": Badge_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
