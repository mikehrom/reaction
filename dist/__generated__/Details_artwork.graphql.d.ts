import { ConcreteFragment } from "relay-runtime";
declare const _Details_artwork$ref: unique symbol;
export declare type Details_artwork$ref = typeof _Details_artwork$ref;
export declare type Details_artwork = {
    readonly href: string | null;
    readonly title: string | null;
    readonly date: string | null;
    readonly sale_message: string | null;
    readonly cultural_maker: string | null;
    readonly artists: ReadonlyArray<({
        readonly __id: string;
        readonly href: string | null;
        readonly name: string | null;
    }) | null> | null;
    readonly collecting_institution: string | null;
    readonly partner: ({
        readonly name: string | null;
        readonly href: string | null;
    }) | null;
    readonly sale: ({
        readonly is_auction: boolean | null;
        readonly is_closed: boolean | null;
    }) | null;
    readonly sale_artwork: ({
        readonly counts: ({
            readonly bidder_positions: any | null;
        }) | null;
        readonly highest_bid: ({
            readonly display: string | null;
        }) | null;
        readonly opening_bid: ({
            readonly display: string | null;
        }) | null;
    }) | null;
    readonly " $refType": Details_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
