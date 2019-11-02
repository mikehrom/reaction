import { ConcreteFragment } from "relay-runtime";
import { ArtworkSidebarClassification_artwork$ref } from "./ArtworkSidebarClassification_artwork.graphql";
import { ArtworkSidebarSizeInfo_piece$ref } from "./ArtworkSidebarSizeInfo_piece.graphql";
import { ArtworkSidebarTitleInfo_artwork$ref } from "./ArtworkSidebarTitleInfo_artwork.graphql";
declare const _ArtworkSidebarMetadata_artwork$ref: unique symbol;
export declare type ArtworkSidebarMetadata_artwork$ref = typeof _ArtworkSidebarMetadata_artwork$ref;
export declare type ArtworkSidebarMetadata_artwork = {
    readonly is_biddable: boolean | null;
    readonly edition_sets: ReadonlyArray<({
        readonly __typename: string;
    }) | null> | null;
    readonly sale_artwork: ({
        readonly lot_label: string | null;
    }) | null;
    readonly " $fragmentRefs": ArtworkSidebarTitleInfo_artwork$ref & ArtworkSidebarSizeInfo_piece$ref & ArtworkSidebarClassification_artwork$ref;
    readonly " $refType": ArtworkSidebarMetadata_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
