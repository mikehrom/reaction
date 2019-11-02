import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarCurrentBidInfo_artwork$ref: unique symbol;
export declare type ArtworkSidebarCurrentBidInfo_artwork$ref = typeof _ArtworkSidebarCurrentBidInfo_artwork$ref;
export declare type ArtworkSidebarCurrentBidInfo_artwork = {
    readonly sale: ({
        readonly is_closed: boolean | null;
        readonly is_live_open: boolean | null;
    }) | null;
    readonly sale_artwork: ({
        readonly is_with_reserve: boolean | null;
        readonly reserve_message: string | null;
        readonly reserve_status: string | null;
        readonly current_bid: ({
            readonly display: string | null;
        }) | null;
        readonly counts: ({
            readonly bidder_positions: any | null;
        }) | null;
    }) | null;
    readonly myLotStanding: ReadonlyArray<{
        readonly active_bid: ({
            readonly is_winning: boolean | null;
        }) | null;
        readonly most_recent_bid: ({
            readonly max_bid: ({
                readonly display: string | null;
            }) | null;
        }) | null;
    }> | null;
    readonly " $refType": ArtworkSidebarCurrentBidInfo_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
