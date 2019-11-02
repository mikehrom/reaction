import { ConcreteRequest } from "relay-runtime";
export declare type FollowArtistInput = {
    readonly artist_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type FollowArtistButtonMutationVariables = {
    readonly input: FollowArtistInput;
};
export declare type FollowArtistButtonMutationResponse = {
    readonly followArtist: ({
        readonly artist: ({
            readonly __id: string;
            readonly is_followed: boolean | null;
            readonly counts: ({
                readonly follows: any | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type FollowArtistButtonMutation = {
    readonly response: FollowArtistButtonMutationResponse;
    readonly variables: FollowArtistButtonMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
