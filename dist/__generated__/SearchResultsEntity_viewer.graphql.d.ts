import { ConcreteFragment } from "relay-runtime";
import { Pagination_pageCursors$ref } from "./Pagination_pageCursors.graphql";
declare const _SearchResultsEntity_viewer$ref: unique symbol;
export declare type SearchResultsEntity_viewer$ref = typeof _SearchResultsEntity_viewer$ref;
export declare type SearchResultsEntity_viewer = {
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
                readonly description?: string | null;
                readonly displayLabel?: string | null;
                readonly href?: string | null;
                readonly _id?: string;
                readonly imageUrl?: string | null;
                readonly displayType?: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": SearchResultsEntity_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
