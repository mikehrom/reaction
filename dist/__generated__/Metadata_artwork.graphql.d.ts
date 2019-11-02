import { ConcreteFragment } from "relay-runtime";
import { Contact_artwork$ref } from "./Contact_artwork.graphql";
import { Details_artwork$ref } from "./Details_artwork.graphql";
declare const _Metadata_artwork$ref: unique symbol;
export declare type Metadata_artwork$ref = typeof _Metadata_artwork$ref;
export declare type Metadata_artwork = {
    readonly href: string | null;
    readonly " $fragmentRefs": Details_artwork$ref & Contact_artwork$ref;
    readonly " $refType": Metadata_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
