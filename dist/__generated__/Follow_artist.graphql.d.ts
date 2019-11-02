import { ConcreteFragment } from "relay-runtime";
declare const _Follow_artist$ref: unique symbol;
export declare type Follow_artist$ref = typeof _Follow_artist$ref;
export declare type Follow_artist = {
    readonly __id: string;
    readonly id: string;
    readonly is_followed: boolean | null;
    readonly " $refType": Follow_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
