import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkDetailsAdditionalInfo_artwork$ref: unique symbol;
export declare type ArtworkDetailsAdditionalInfo_artwork$ref = typeof _ArtworkDetailsAdditionalInfo_artwork$ref;
export declare type ArtworkDetailsAdditionalInfo_artwork = {
    readonly series: string | null;
    readonly publisher: string | null;
    readonly manufacturer: string | null;
    readonly image_rights: string | null;
    readonly framed: ({
        readonly label: string | null;
        readonly details: string | null;
    }) | null;
    readonly signatureInfo: ({
        readonly label: string | null;
        readonly details: string | null;
    }) | null;
    readonly conditionDescription: ({
        readonly label: string | null;
        readonly details: string | null;
    }) | null;
    readonly certificateOfAuthenticity: ({
        readonly label: string | null;
        readonly details: string | null;
    }) | null;
    readonly " $refType": ArtworkDetailsAdditionalInfo_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
