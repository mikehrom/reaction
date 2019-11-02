import { ConcreteFragment } from "relay-runtime";
import { Badge_artwork$ref } from "./Badge_artwork.graphql";
import { Metadata_artwork$ref } from "./Metadata_artwork.graphql";
import { Save_artwork$ref } from "./Save_artwork.graphql";
declare const _GridItem_artwork$ref: unique symbol;
export declare type GridItem_artwork$ref = typeof _GridItem_artwork$ref;
export declare type GridItem_artwork = {
    readonly _id: string;
    readonly title: string | null;
    readonly image_title: string | null;
    readonly image: ({
        readonly placeholder: string | null;
        readonly url: string | null;
        readonly aspect_ratio: number;
    }) | null;
    readonly href: string | null;
    readonly " $fragmentRefs": Metadata_artwork$ref & Save_artwork$ref & Badge_artwork$ref;
    readonly " $refType": GridItem_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
