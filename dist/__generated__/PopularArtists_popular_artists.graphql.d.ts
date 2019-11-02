import { ConcreteFragment } from "relay-runtime";
declare const _PopularArtists_popular_artists$ref: unique symbol;
export declare type PopularArtists_popular_artists$ref = typeof _PopularArtists_popular_artists$ref;
export declare type PopularArtists_popular_artists = {
    readonly artists: ReadonlyArray<({
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
    readonly " $refType": PopularArtists_popular_artists$ref;
};
declare const node: ConcreteFragment;
export default node;
