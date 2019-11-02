import { ConcreteFragment } from "relay-runtime";
declare const _MarketInsights_artist$ref: unique symbol;
export declare type MarketInsights_artist$ref = typeof _MarketInsights_artist$ref;
export declare type MarketInsights_artist = {
    readonly _id: string;
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
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": MarketInsights_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
