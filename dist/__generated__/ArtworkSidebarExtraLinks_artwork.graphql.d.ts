import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarExtraLinks_artwork$ref: unique symbol;
export declare type ArtworkSidebarExtraLinks_artwork$ref = typeof _ArtworkSidebarExtraLinks_artwork$ref;
export declare type ArtworkSidebarExtraLinks_artwork = {
    readonly _id: string;
    readonly is_in_auction: boolean | null;
    readonly is_for_sale: boolean | null;
    readonly is_acquireable: boolean | null;
    readonly is_inquireable: boolean | null;
    readonly artists: ReadonlyArray<({
        readonly is_consignable: boolean | null;
    }) | null> | null;
    readonly sale: ({
        readonly is_closed: boolean | null;
    }) | null;
    readonly " $refType": ArtworkSidebarExtraLinks_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
