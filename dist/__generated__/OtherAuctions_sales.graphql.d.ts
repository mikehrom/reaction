import { ConcreteFragment } from "relay-runtime";
import { AuctionCard_sale$ref } from "./AuctionCard_sale.graphql";
declare const _OtherAuctions_sales$ref: unique symbol;
export declare type OtherAuctions_sales$ref = typeof _OtherAuctions_sales$ref;
export declare type OtherAuctions_sales = ReadonlyArray<{
    readonly " $fragmentRefs": AuctionCard_sale$ref;
    readonly " $refType": OtherAuctions_sales$ref;
}>;
declare const node: ConcreteFragment;
export default node;
