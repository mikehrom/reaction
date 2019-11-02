import { ConcreteFragment } from "relay-runtime";
declare const _Genes_artist$ref: unique symbol;
export declare type Genes_artist$ref = typeof _Genes_artist$ref;
export declare type Genes_artist = {
    readonly related: ({
        readonly genes: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly href: string | null;
                    readonly name: string | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly " $refType": Genes_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
