import { ConcreteFragment } from "relay-runtime";
import { ArtworkDetailsAboutTheWorkFromArtsy_artwork$ref } from "./ArtworkDetailsAboutTheWorkFromArtsy_artwork.graphql";
import { ArtworkDetailsAboutTheWorkFromPartner_artwork$ref } from "./ArtworkDetailsAboutTheWorkFromPartner_artwork.graphql";
import { ArtworkDetailsAdditionalInfo_artwork$ref } from "./ArtworkDetailsAdditionalInfo_artwork.graphql";
import { ArtworkDetailsArticles_artwork$ref } from "./ArtworkDetailsArticles_artwork.graphql";
declare const _ArtworkDetails_artwork$ref: unique symbol;
export declare type ArtworkDetails_artwork$ref = typeof _ArtworkDetails_artwork$ref;
export declare type ArtworkDetails_artwork = {
    readonly articles: ReadonlyArray<({
        readonly id: string;
    }) | null> | null;
    readonly literature: string | null;
    readonly exhibition_history: string | null;
    readonly provenance: string | null;
    readonly " $fragmentRefs": ArtworkDetailsAboutTheWorkFromArtsy_artwork$ref & ArtworkDetailsAboutTheWorkFromPartner_artwork$ref & ArtworkDetailsAdditionalInfo_artwork$ref & ArtworkDetailsArticles_artwork$ref;
    readonly " $refType": ArtworkDetails_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
