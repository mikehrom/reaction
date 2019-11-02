import { ConcreteFragment } from "relay-runtime";
declare const _Pagination_pageCursors$ref: unique symbol;
export declare type Pagination_pageCursors$ref = typeof _Pagination_pageCursors$ref;
export declare type Pagination_pageCursors = {
    readonly around: ReadonlyArray<{
        readonly cursor: string;
        readonly page: number;
        readonly isCurrent: boolean;
    }>;
    readonly first: ({
        readonly cursor: string;
        readonly page: number;
        readonly isCurrent: boolean;
    }) | null;
    readonly last: ({
        readonly cursor: string;
        readonly page: number;
        readonly isCurrent: boolean;
    }) | null;
    readonly previous: ({
        readonly cursor: string;
        readonly page: number;
    }) | null;
    readonly " $refType": Pagination_pageCursors$ref;
};
declare const node: ConcreteFragment;
export default node;
