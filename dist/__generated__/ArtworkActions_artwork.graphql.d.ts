import { ConcreteFragment } from "relay-runtime";
import { ArtworkSharePanel_artwork$ref } from "./ArtworkSharePanel_artwork.graphql";
import { Save_artwork$ref } from "./Save_artwork.graphql";
declare const _ArtworkActions_artwork$ref: unique symbol;
export declare type ArtworkActions_artwork$ref = typeof _ArtworkActions_artwork$ref;
export declare type ArtworkActions_artwork = {
    readonly artists: ReadonlyArray<({
        readonly name: string | null;
    }) | null> | null;
    readonly date: string | null;
    readonly dimensions: ({
        readonly cm: string | null;
    }) | null;
    readonly href: string | null;
    readonly id: string;
    readonly image: ({
        readonly id: string | null;
        readonly url: string | null;
        readonly height: number | null;
        readonly width: number | null;
    }) | null;
    readonly is_downloadable: boolean | null;
    readonly is_hangable: boolean | null;
    readonly partner: ({
        readonly id: string;
    }) | null;
    readonly title: string | null;
    readonly sale: ({
        readonly is_closed: boolean | null;
        readonly is_auction: boolean | null;
    }) | null;
    readonly " $fragmentRefs": Save_artwork$ref & ArtworkSharePanel_artwork$ref;
    readonly " $refType": ArtworkActions_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
