import { ConcreteFragment } from "relay-runtime";
declare const _ArtistAuctionResultItem_auctionResult$ref: unique symbol;
export declare type ArtistAuctionResultItem_auctionResult$ref = typeof _ArtistAuctionResultItem_auctionResult$ref;
export declare type ArtistAuctionResultItem_auctionResult = {
    readonly title: string | null;
    readonly dimension_text: string | null;
    readonly organization: string | null;
    readonly images: ({
        readonly thumbnail: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly description: string | null;
    readonly date_text: string | null;
    readonly sale_date_text: string | null;
    readonly price_realized: ({
        readonly display: string | null;
        readonly cents_usd: number | null;
    }) | null;
    readonly estimate: ({
        readonly display: string | null;
    }) | null;
    readonly " $refType": ArtistAuctionResultItem_auctionResult$ref;
};
declare const node: ConcreteFragment;
export default node;
