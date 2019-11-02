import { ConcreteFragment } from "relay-runtime";
import { Pagination_pageCursors$ref } from "./Pagination_pageCursors.graphql";
declare const _ArtistShows_artist$ref: unique symbol;
export declare type ArtistShows_artist$ref = typeof _ArtistShows_artist$ref;
export declare type ArtistShows_artist = {
    readonly id: string;
    readonly showsConnection: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly pageCursors: ({
            readonly " $fragmentRefs": Pagination_pageCursors$ref;
        }) | null;
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly partner: ({
                    readonly name?: string | null;
                }) | null;
                readonly name: string | null;
                readonly href: string | null;
                readonly exhibition_period: string | null;
                readonly cover_image: ({
                    readonly cropped: ({
                        readonly url: string | null;
                    }) | null;
                }) | null;
                readonly city: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtistShows_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
