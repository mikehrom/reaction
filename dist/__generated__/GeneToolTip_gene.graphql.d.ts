import { ConcreteFragment } from "relay-runtime";
declare const _GeneToolTip_gene$ref: unique symbol;
export declare type GeneToolTip_gene$ref = typeof _GeneToolTip_gene$ref;
export declare type GeneToolTip_gene = {
    readonly description: string | null;
    readonly href: string | null;
    readonly id: string;
    readonly _id: string;
    readonly image: ({
        readonly url: string | null;
    }) | null;
    readonly name: string | null;
    readonly " $refType": GeneToolTip_gene$ref;
};
declare const node: ConcreteFragment;
export default node;
