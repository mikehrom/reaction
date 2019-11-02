import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkSidebarPartnerInfo_artwork$ref: unique symbol;
export declare type ArtworkSidebarPartnerInfo_artwork$ref = typeof _ArtworkSidebarPartnerInfo_artwork$ref;
export declare type ArtworkSidebarPartnerInfo_artwork = {
    readonly partner: ({
        readonly name: string | null;
        readonly href: string | null;
        readonly locations: ReadonlyArray<({
            readonly city: string | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ArtworkSidebarPartnerInfo_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
