import { ConcreteFragment } from "relay-runtime";
declare const _createTestEnv_artwork$ref: unique symbol;
export declare type createTestEnv_artwork$ref = typeof _createTestEnv_artwork$ref;
export declare type createTestEnv_artwork = {
    readonly title: string | null;
    readonly artist: ({
        readonly name: string | null;
    }) | null;
    readonly " $refType": createTestEnv_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
