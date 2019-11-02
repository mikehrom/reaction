import { ConcreteFragment } from "relay-runtime";
import { ArtistAuctionResultItem_auctionResult$ref } from "./ArtistAuctionResultItem_auctionResult.graphql";
import { Pagination_pageCursors$ref } from "./Pagination_pageCursors.graphql";
declare const _ArtistAuctionResults_artist$ref: unique symbol;
export declare type ArtistAuctionResults_artist$ref = typeof _ArtistAuctionResults_artist$ref;
export declare type ArtistAuctionResults_artist = {
    readonly id: string;
    readonly auctionResults: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly pageCursors: ({
            readonly " $fragmentRefs": Pagination_pageCursors$ref;
        }) | null;
        readonly totalCount: number | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly " $fragmentRefs": ArtistAuctionResultItem_auctionResult$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtistAuctionResults_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
