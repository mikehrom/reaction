import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
import { Pagination_pageCursors$ref } from "./Pagination_pageCursors.graphql";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
declare const _ArtworkFilterArtworkGrid2_filtered_artworks$ref: unique symbol;
export declare type ArtworkFilterArtworkGrid2_filtered_artworks$ref = typeof _ArtworkFilterArtworkGrid2_filtered_artworks$ref;
export declare type ArtworkFilterArtworkGrid2_filtered_artworks = {
    readonly __id: string;
    readonly aggregations: ReadonlyArray<({
        readonly slice: ArtworkAggregation | null;
        readonly counts: ReadonlyArray<({
            readonly id: string;
            readonly name: string | null;
            readonly count: number | null;
        }) | null> | null;
    }) | null> | null;
    readonly artworks: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly pageCursors: ({
            readonly " $fragmentRefs": Pagination_pageCursors$ref;
        }) | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
            }) | null;
        }) | null> | null;
        readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
    }) | null;
    readonly " $refType": ArtworkFilterArtworkGrid2_filtered_artworks$ref;
};
declare const node: ConcreteFragment;
export default node;
