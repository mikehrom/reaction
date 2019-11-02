import { ConcreteFragment } from "relay-runtime";
import { Badge_artwork$ref } from "./Badge_artwork.graphql";
import { Metadata_artwork$ref } from "./Metadata_artwork.graphql";
import { Save_artwork$ref } from "./Save_artwork.graphql";
declare const _FillwidthItem_artwork$ref: unique symbol;
export declare type FillwidthItem_artwork$ref = typeof _FillwidthItem_artwork$ref;
export declare type FillwidthItem_artwork = {
    readonly image: ({
        readonly url: string | null;
        readonly aspect_ratio: number;
    }) | null;
    readonly href: string | null;
    readonly " $fragmentRefs": Metadata_artwork$ref & Save_artwork$ref & Badge_artwork$ref;
    readonly " $refType": FillwidthItem_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
