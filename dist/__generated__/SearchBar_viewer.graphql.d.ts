import { ConcreteFragment } from "relay-runtime";
declare const _SearchBar_viewer$ref: unique symbol;
export declare type SearchBar_viewer$ref = typeof _SearchBar_viewer$ref;
export declare type SearchBar_viewer = {
    readonly search?: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly displayLabel: string | null;
                readonly href: string | null;
                readonly displayType?: string | null;
                readonly id?: string;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": SearchBar_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
