import { ConcreteFragment } from "relay-runtime";
declare const _GeneSearchResults_viewer$ref: unique symbol;
export declare type GeneSearchResults_viewer$ref = typeof _GeneSearchResults_viewer$ref;
export declare type GeneSearchResults_viewer = {
    readonly match_gene: ReadonlyArray<({
        readonly name: string | null;
        readonly id: string;
        readonly _id: string;
        readonly image: ({
            readonly cropped: ({
                readonly url: string | null;
            }) | null;
        }) | null;
    }) | null> | null;
    readonly " $refType": GeneSearchResults_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
