import { ConcreteFragment } from "relay-runtime";
import { Pagination_pageCursors$ref } from "./Pagination_pageCursors.graphql";
declare const _SearchResultsArtists_viewer$ref: unique symbol;
export declare type SearchResultsArtists_viewer$ref = typeof _SearchResultsArtists_viewer$ref;
export declare type SearchResultsArtists_viewer = {
    readonly search: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly pageCursors: ({
            readonly " $fragmentRefs": Pagination_pageCursors$ref;
        }) | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly name?: string | null;
                readonly _id?: string;
                readonly href?: string | null;
                readonly imageUrl?: string | null;
                readonly bio?: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": SearchResultsArtists_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
