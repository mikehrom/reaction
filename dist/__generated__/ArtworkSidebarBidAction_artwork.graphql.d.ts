import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarBidAction_artwork$ref: unique symbol;
export declare type ArtworkSidebarBidAction_artwork$ref = typeof _ArtworkSidebarBidAction_artwork$ref;
export declare type ArtworkSidebarBidAction_artwork = {
    readonly myLotStanding: ReadonlyArray<{
        readonly most_recent_bid: ({
            readonly max_bid: ({
                readonly cents: number | null;
            }) | null;
        }) | null;
    }> | null;
    readonly id: string;
    readonly _id: string;
    readonly sale: ({
        readonly id: string;
        readonly registrationStatus: ({
            readonly qualified_for_bidding: boolean | null;
        }) | null;
        readonly is_preview: boolean | null;
        readonly is_open: boolean | null;
        readonly is_live_open: boolean | null;
        readonly is_closed: boolean | null;
        readonly is_registration_closed: boolean | null;
    }) | null;
    readonly sale_artwork: ({
        readonly increments: ReadonlyArray<({
            readonly cents: number | null;
            readonly display: string | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtworkSidebarBidAction_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
