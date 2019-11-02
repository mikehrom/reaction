import { ConcreteFragment } from "relay-runtime";
declare const _SuggestedGenes_suggested_genes$ref: unique symbol;
export declare type SuggestedGenes_suggested_genes$ref = typeof _SuggestedGenes_suggested_genes$ref;
export declare type SuggestedGenes_suggested_genes = ReadonlyArray<{
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly " $refType": SuggestedGenes_suggested_genes$ref;
}>;
declare const node: ConcreteFragment;
export default node;
