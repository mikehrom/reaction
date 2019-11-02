import { ConcreteFragment } from "relay-runtime";
import { Badge_artwork$ref } from "./Badge_artwork.graphql";
import { Metadata_artwork$ref } from "./Metadata_artwork.graphql";
import { Save_artwork$ref } from "./Save_artwork.graphql";
declare const _RecentlyViewed_me$ref: unique symbol;
export declare type RecentlyViewed_me$ref = typeof _RecentlyViewed_me$ref;
export declare type RecentlyViewed_me = {
    readonly recentlyViewedArtworks: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
                readonly image: ({
                    readonly aspect_ratio: number;
                    readonly url: string | null;
                }) | null;
                readonly href: string | null;
                readonly " $fragmentRefs": Metadata_artwork$ref & Save_artwork$ref & Badge_artwork$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": RecentlyViewed_me$ref;
};
declare const node: ConcreteFragment;
export default node;
