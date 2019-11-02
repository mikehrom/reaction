import { ConcreteFragment } from "relay-runtime";
declare const _Save_artwork$ref: unique symbol;
export declare type Save_artwork$ref = typeof _Save_artwork$ref;
export declare type Save_artwork = {
    readonly __id: string;
    readonly _id: string;
    readonly id: string;
    readonly is_saved: boolean | null;
    readonly title: string | null;
    readonly " $refType": Save_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
