import { ConcreteRequest } from "relay-runtime";
export declare type UpdateMyProfileInput = {
    readonly name?: string | null;
    readonly email?: string | null;
    readonly phone?: string | null;
    readonly location?: EditableLocation | null;
    readonly collector_level?: number | null;
    readonly price_range_min?: number | null;
    readonly price_range_max?: number | null;
    readonly clientMutationId?: string | null;
};
export declare type EditableLocation = {
    readonly address?: string | null;
    readonly address_2?: string | null;
    readonly city?: string | null;
    readonly country?: string | null;
    readonly summary?: string | null;
    readonly postal_code?: string | null;
    readonly state?: string | null;
    readonly state_code?: string | null;
};
export declare type BudgetUpdateMyUserProfileMutationVariables = {
    readonly input: UpdateMyProfileInput;
};
export declare type BudgetUpdateMyUserProfileMutationResponse = {
    readonly updateMyUserProfile: ({
        readonly user: ({
            readonly name: string;
        }) | null;
    }) | null;
};
export declare type BudgetUpdateMyUserProfileMutation = {
    readonly response: BudgetUpdateMyUserProfileMutationResponse;
    readonly variables: BudgetUpdateMyUserProfileMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
