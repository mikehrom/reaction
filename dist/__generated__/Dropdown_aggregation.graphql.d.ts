import { ConcreteFragment } from "relay-runtime";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
declare const _Dropdown_aggregation$ref: unique symbol;
export declare type Dropdown_aggregation$ref = typeof _Dropdown_aggregation$ref;
export declare type Dropdown_aggregation = {
    readonly slice: ArtworkAggregation | null;
    readonly counts: ReadonlyArray<({
        readonly name: string | null;
        readonly id: string;
        readonly count: number | null;
    }) | null> | null;
    readonly " $refType": Dropdown_aggregation$ref;
};
declare const node: ConcreteFragment;
export default node;
