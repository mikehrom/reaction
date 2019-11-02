import { ConcreteFragment } from "relay-runtime";
import { Fillwidth_artworks$ref } from "./Fillwidth_artworks.graphql";
import { Follow_artist$ref } from "./Follow_artist.graphql";
declare const _ArtistRow_artist$ref: unique symbol;
export declare type ArtistRow_artist$ref = typeof _ArtistRow_artist$ref;
export declare type ArtistRow_artist = {
    readonly name: string | null;
    readonly href: string | null;
    readonly artworks: ({
        readonly " $fragmentRefs": Fillwidth_artworks$ref;
    }) | null;
    readonly " $fragmentRefs": Follow_artist$ref;
    readonly " $refType": ArtistRow_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
