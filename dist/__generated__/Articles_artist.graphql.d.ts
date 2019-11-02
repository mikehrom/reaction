import { ConcreteFragment } from "relay-runtime";
import { ArtistArticles_artist$ref } from "./ArtistArticles_artist.graphql";
declare const _Articles_artist$ref: unique symbol;
export declare type Articles_artist$ref = typeof _Articles_artist$ref;
export declare type Articles_artist = {
    readonly " $fragmentRefs": ArtistArticles_artist$ref;
    readonly " $refType": Articles_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
