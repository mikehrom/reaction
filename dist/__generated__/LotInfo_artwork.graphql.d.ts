import { ConcreteFragment } from "relay-runtime";
declare const _LotInfo_artwork$ref: unique symbol;
export declare type LotInfo_artwork$ref = typeof _LotInfo_artwork$ref;
export declare type LotInfo_artwork = {
    readonly _id: string;
    readonly date: string | null;
    readonly title: string | null;
    readonly imageUrl: string | null;
    readonly artistNames: string | null;
    readonly " $refType": LotInfo_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
