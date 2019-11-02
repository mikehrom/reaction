import { ConcreteFragment } from "relay-runtime";
import { Metadata_artwork$ref } from "./Metadata_artwork.graphql";
declare const _Artwork_artwork$ref: unique symbol;
export declare type Artwork_artwork$ref = typeof _Artwork_artwork$ref;
export declare type Artwork_artwork = {
    readonly id: string;
    readonly image: ({
        readonly url: string | null;
        readonly aspect_ratio: number;
    }) | null;
    readonly " $fragmentRefs": Metadata_artwork$ref;
    readonly " $refType": Artwork_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
