import { ConcreteRequest } from "relay-runtime";
import { OtherAuctions_sales$ref } from "./OtherAuctions_sales.graphql";
export declare type SaleSorts = "CREATED_AT_ASC" | "CREATED_AT_DESC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_ASC" | "ELIGIBLE_SALE_ARTWORKS_COUNT_DESC" | "END_AT_ASC" | "END_AT_DESC" | "NAME_ASC" | "NAME_DESC" | "START_AT_ASC" | "START_AT_DESC" | "TIMELY_AT_NAME_ASC" | "TIMELY_AT_NAME_DESC" | "_ID_ASC" | "_ID_DESC" | "%future added value";
export declare type OtherAuctionsQueryVariables = {
    readonly size: number;
    readonly sort?: SaleSorts | null;
};
export declare type OtherAuctionsQueryResponse = {
    readonly sales: ReadonlyArray<({
        readonly " $fragmentRefs": OtherAuctions_sales$ref;
    }) | null> | null;
};
export declare type OtherAuctionsQuery = {
    readonly response: OtherAuctionsQueryResponse;
    readonly variables: OtherAuctionsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
