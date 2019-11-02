import { ConcreteFragment } from "relay-runtime";
declare const _MarketDataSummary_artist$ref: unique symbol;
export declare type MarketDataSummary_artist$ref = typeof _MarketDataSummary_artist$ref;
export declare type MarketDataSummary_artist = {
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
    readonly " $refType": MarketDataSummary_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
