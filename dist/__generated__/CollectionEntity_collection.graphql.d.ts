import { ConcreteFragment } from "relay-runtime";
declare const _CollectionEntity_collection$ref: unique symbol;
export declare type CollectionEntity_collection$ref = typeof _CollectionEntity_collection$ref;
export declare type CollectionEntity_collection = {
    readonly slug: string;
    readonly headerImage: string | null;
    readonly title: string;
    readonly price_guidance: number | null;
    readonly show_on_editorial: boolean;
    readonly " $refType": CollectionEntity_collection$ref;
};
declare const node: ConcreteFragment;
export default node;
