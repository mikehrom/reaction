import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
declare const _ArtworkGrid_artist$ref: unique symbol;
export declare type ArtworkGrid_artist$ref = typeof _ArtworkGrid_artist$ref;
export declare type ArtworkGrid_artist = {
    readonly artworks_connection: ({
        readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
    }) | null;
    readonly " $refType": ArtworkGrid_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
