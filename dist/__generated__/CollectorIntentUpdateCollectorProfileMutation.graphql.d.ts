import { ConcreteRequest } from "relay-runtime";
export declare type Intents = "BUY_ART_AND_DESIGN" | "FIND_ART_EXHIBITS" | "LEARN_ABOUT_ART" | "READ_ART_MARKET_NEWS" | "RESEARCH_ART_PRICES" | "SELL_ART_AND_DESIGN" | "%future added value";
export declare type UpdateCollectorProfileInput = {
    readonly loyalty_applicant?: boolean | null;
    readonly professional_buyer?: boolean | null;
    readonly self_reported_purchases?: string | null;
    readonly intents?: ReadonlyArray<Intents | null> | null;
    readonly clientMutationId?: string | null;
};
export declare type CollectorIntentUpdateCollectorProfileMutationVariables = {
    readonly input: UpdateCollectorProfileInput;
};
export declare type CollectorIntentUpdateCollectorProfileMutationResponse = {
    readonly updateCollectorProfile: ({
        readonly intents: ReadonlyArray<string | null> | null;
    }) | null;
};
export declare type CollectorIntentUpdateCollectorProfileMutation = {
    readonly response: CollectorIntentUpdateCollectorProfileMutationResponse;
    readonly variables: CollectorIntentUpdateCollectorProfileMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
