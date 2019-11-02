import { ConcreteFragment } from "relay-runtime";
declare const _ArtistMarketInsights_artist$ref: unique symbol;
export declare type ArtistMarketInsights_artist$ref = typeof _ArtistMarketInsights_artist$ref;
export declare type ArtistMarketInsights_artist = {
    readonly collections: ReadonlyArray<string | null> | null;
    readonly highlights: ({
        readonly partners: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly categories: ReadonlyArray<({
                        readonly id: string;
                    }) | null> | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly auctionResults: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly price_realized: ({
                    readonly display: string | null;
                }) | null;
                readonly organization: string | null;
                readonly sale_date: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtistMarketInsights_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
