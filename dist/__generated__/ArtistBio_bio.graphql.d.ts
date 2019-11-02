import { ConcreteFragment } from "relay-runtime";
declare const _ArtistBio_bio$ref: unique symbol;
export declare type ArtistBio_bio$ref = typeof _ArtistBio_bio$ref;
export declare type ArtistBio_bio = {
    readonly biography_blurb: ({
        readonly text: string | null;
    }) | null;
    readonly " $refType": ArtistBio_bio$ref;
};
declare const node: ConcreteFragment;
export default node;
