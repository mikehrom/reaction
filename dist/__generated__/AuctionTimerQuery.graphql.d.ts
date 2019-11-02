import { ConcreteRequest } from "relay-runtime";
import { AuctionTimer_sale$ref } from "./AuctionTimer_sale.graphql";
export declare type AuctionTimerQueryVariables = {
    readonly saleID: string;
};
export declare type AuctionTimerQueryResponse = {
    readonly sale: ({
        readonly " $fragmentRefs": AuctionTimer_sale$ref;
    }) | null;
};
export declare type AuctionTimerQuery = {
    readonly response: AuctionTimerQueryResponse;
    readonly variables: AuctionTimerQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
