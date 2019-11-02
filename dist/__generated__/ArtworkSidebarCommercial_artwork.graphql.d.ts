import { ConcreteFragment } from "relay-runtime";
import { ArtworkSidebarSizeInfo_piece$ref } from "./ArtworkSidebarSizeInfo_piece.graphql";
declare const _ArtworkSidebarCommercial_artwork$ref: unique symbol;
export declare type ArtworkSidebarCommercial_artwork$ref = typeof _ArtworkSidebarCommercial_artwork$ref;
export declare type ArtworkSidebarCommercial_artwork = {
    readonly id: string;
    readonly _id: string;
    readonly is_for_sale: boolean | null;
    readonly is_acquireable: boolean | null;
    readonly is_inquireable: boolean | null;
    readonly is_offerable: boolean | null;
    readonly price: string | null;
    readonly priceIncludesTaxDisplay: string | null;
    readonly sale_message: string | null;
    readonly shippingInfo: string | null;
    readonly shippingOrigin: string | null;
    readonly edition_sets: ReadonlyArray<({
        readonly id: string;
        readonly __id: string;
        readonly is_acquireable: boolean | null;
        readonly is_offerable: boolean | null;
        readonly sale_message: string | null;
        readonly " $fragmentRefs": ArtworkSidebarSizeInfo_piece$ref;
    }) | null> | null;
    readonly " $refType": ArtworkSidebarCommercial_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
