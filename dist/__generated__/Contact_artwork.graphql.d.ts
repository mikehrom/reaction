import { ConcreteFragment } from "relay-runtime";
declare const _Contact_artwork$ref: unique symbol;
export declare type Contact_artwork$ref = typeof _Contact_artwork$ref;
export declare type Contact_artwork = {
    readonly href: string | null;
    readonly is_inquireable: boolean | null;
    readonly sale: ({
        readonly is_auction: boolean | null;
        readonly is_live_open: boolean | null;
        readonly is_open: boolean | null;
        readonly is_closed: boolean | null;
    }) | null;
    readonly partner: ({
        readonly type: string | null;
    }) | null;
    readonly sale_artwork: ({
        readonly highest_bid: ({
            readonly display: string | null;
        }) | null;
        readonly opening_bid: ({
            readonly display: string | null;
        }) | null;
        readonly counts: ({
            readonly bidder_positions: any | null;
        }) | null;
    }) | null;
    readonly " $refType": Contact_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
