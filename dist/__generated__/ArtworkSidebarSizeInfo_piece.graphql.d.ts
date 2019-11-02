import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarSizeInfo_piece$ref: unique symbol;
export declare type ArtworkSidebarSizeInfo_piece$ref = typeof _ArtworkSidebarSizeInfo_piece$ref;
export declare type ArtworkSidebarSizeInfo_piece = {
    readonly dimensions: ({
        readonly in: string | null;
        readonly cm: string | null;
    }) | null;
    readonly edition_of: string | null;
    readonly " $refType": ArtworkSidebarSizeInfo_piece$ref;
};
declare const node: ConcreteFragment;
export default node;
