import { ConcreteFragment } from "relay-runtime";
declare const _Collections_categories$ref: unique symbol;
export declare type Collections_categories$ref = typeof _Collections_categories$ref;
export declare type Collections_categories = ReadonlyArray<{
    readonly name: string;
    readonly collections: ReadonlyArray<{
        readonly slug: string;
        readonly headerImage: string | null;
        readonly title: string;
    }>;
    readonly " $refType": Collections_categories$ref;
}>;
declare const node: ConcreteFragment;
export default node;
