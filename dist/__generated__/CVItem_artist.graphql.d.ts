import { ConcreteFragment } from "relay-runtime";
declare const _CVItem_artist$ref: unique symbol;
export declare type CVItem_artist$ref = typeof _CVItem_artist$ref;
export declare type CVItem_artist = {
    readonly id: string;
    readonly showsConnection: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
        };
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
                readonly partner: ({
                    readonly name?: string | null;
                    readonly href?: string | null;
                }) | null;
                readonly name: string | null;
                readonly start_at: string | null;
                readonly city: string | null;
                readonly href: string | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": CVItem_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
