import { ConcreteFragment } from "relay-runtime";
import { ArtistHeader_artist$ref } from "./ArtistHeader_artist.graphql";
import { ArtistMeta_artist$ref } from "./ArtistMeta_artist.graphql";
import { NavigationTabs_artist$ref } from "./NavigationTabs_artist.graphql";
declare const _ArtistApp_artist$ref: unique symbol;
export declare type ArtistApp_artist$ref = typeof _ArtistApp_artist$ref;
export declare type ArtistApp_artist = {
    readonly _id: string;
    readonly id: string;
    readonly " $fragmentRefs": ArtistMeta_artist$ref & ArtistHeader_artist$ref & NavigationTabs_artist$ref;
    readonly " $refType": ArtistApp_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
