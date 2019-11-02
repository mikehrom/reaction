import { ConcreteFragment } from "relay-runtime";
declare const _ArtistSearchResults_viewer$ref: unique symbol;
export declare type ArtistSearchResults_viewer$ref = typeof _ArtistSearchResults_viewer$ref;
export declare type ArtistSearchResults_viewer = {
    readonly match_artist: ReadonlyArray<({
        readonly id: string;
        readonly _id: string;
        readonly __id: string;
        readonly name: string | null;
        readonly image: ({
            readonly cropped: ({
                readonly url: string | null;
            }) | null;
        }) | null;
    }) | null> | null;
    readonly " $refType": ArtistSearchResults_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
