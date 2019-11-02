import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSharePanel_artwork$ref: unique symbol;
export declare type ArtworkSharePanel_artwork$ref = typeof _ArtworkSharePanel_artwork$ref;
export declare type ArtworkSharePanel_artwork = {
    readonly href: string | null;
    readonly images: ReadonlyArray<({
        readonly url: string | null;
    }) | null> | null;
    readonly artworkMeta: ({
        readonly share: string | null;
    }) | null;
    readonly " $refType": ArtworkSharePanel_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
