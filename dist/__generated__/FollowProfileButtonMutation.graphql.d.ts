import { ConcreteRequest } from "relay-runtime";
export declare type FollowProfileInput = {
    readonly profile_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type FollowProfileButtonMutationVariables = {
    readonly input: FollowProfileInput;
};
export declare type FollowProfileButtonMutationResponse = {
    readonly followProfile: ({
        readonly profile: ({
            readonly __id: string;
            readonly is_followed: boolean | null;
        }) | null;
    }) | null;
};
export declare type FollowProfileButtonMutation = {
    readonly response: FollowProfileButtonMutationResponse;
    readonly variables: FollowProfileButtonMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
