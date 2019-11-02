import { ConcreteFragment } from "relay-runtime";
import { FillwidthItem_artwork$ref } from "./FillwidthItem_artwork.graphql";
declare const _Fillwidth_artworks$ref: unique symbol;
export declare type Fillwidth_artworks$ref = typeof _Fillwidth_artworks$ref;
export declare type Fillwidth_artworks = {
    readonly edges: ReadonlyArray<({
        readonly node: ({
            readonly __id: string;
            readonly image: ({
                readonly aspect_ratio: number;
            }) | null;
            readonly " $fragmentRefs": FillwidthItem_artwork$ref;
        }) | null;
    }) | null> | null;
    readonly " $refType": Fillwidth_artworks$ref;
};
declare const node: ConcreteFragment;
export default node;
