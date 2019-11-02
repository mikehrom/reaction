import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarAuctionPartnerInfo_artwork$ref: unique symbol;
export declare type ArtworkSidebarAuctionPartnerInfo_artwork$ref = typeof _ArtworkSidebarAuctionPartnerInfo_artwork$ref;
export declare type ArtworkSidebarAuctionPartnerInfo_artwork = {
    readonly partner: ({
        readonly name: string | null;
    }) | null;
    readonly sale_artwork: ({
        readonly estimate: string | null;
    }) | null;
    readonly sale: ({
        readonly _id: string;
        readonly is_closed: boolean | null;
        readonly is_with_buyers_premium: boolean | null;
    }) | null;
    readonly " $refType": ArtworkSidebarAuctionPartnerInfo_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
