import { ConcreteRequest } from "relay-runtime";
import { MarketInsights_artist$ref } from "./MarketInsights_artist.graphql";
export declare type MarketInsightsContentsQueryVariables = {
    readonly artistID: string;
};
export declare type MarketInsightsContentsQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": MarketInsights_artist$ref;
    }) | null;
};
export declare type MarketInsightsContentsQuery = {
    readonly response: MarketInsightsContentsQueryResponse;
    readonly variables: MarketInsightsContentsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
