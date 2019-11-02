import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
import { RelatedWorksArtworkGrid_artwork$ref } from "./RelatedWorksArtworkGrid_artwork.graphql";
declare const _OtherWorks_artwork$ref: unique symbol;
export declare type OtherWorks_artwork$ref = typeof _OtherWorks_artwork$ref;
export declare type OtherWorks_artwork = {
    readonly contextGrids: ReadonlyArray<({
        readonly __typename: string;
        readonly title: string | null;
        readonly ctaTitle: string | null;
        readonly ctaHref: string | null;
        readonly artworks: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                }) | null;
            }) | null> | null;
            readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
        }) | null;
    }) | null> | null;
    readonly id: string;
    readonly _id: string;
    readonly sale: ({
        readonly is_closed: boolean | null;
    }) | null;
    readonly context: ({
        readonly __typename: string;
    }) | null;
    readonly " $fragmentRefs": RelatedWorksArtworkGrid_artwork$ref;
    readonly " $refType": OtherWorks_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
