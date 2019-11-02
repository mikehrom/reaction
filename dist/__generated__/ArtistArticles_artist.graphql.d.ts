import { ConcreteFragment } from "relay-runtime";
import { Pagination_pageCursors$ref } from "./Pagination_pageCursors.graphql";
declare const _ArtistArticles_artist$ref: unique symbol;
export declare type ArtistArticles_artist$ref = typeof _ArtistArticles_artist$ref;
export declare type ArtistArticles_artist = {
    readonly id: string;
    readonly articlesConnection: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly pageCursors: ({
            readonly " $fragmentRefs": Pagination_pageCursors$ref;
        }) | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly href: string | null;
                readonly thumbnail_title: string | null;
                readonly author: ({
                    readonly name: string | null;
                }) | null;
                readonly published_at: string | null;
                readonly thumbnail_image: ({
                    readonly resized: ({
                        readonly url: string | null;
                    }) | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtistArticles_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
