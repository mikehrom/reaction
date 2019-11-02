import { ConcreteRequest } from "relay-runtime";
export declare type FollowArtistInput = {
    readonly artist_id?: string | null;
    readonly unfollow?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type FollowArtistMutationVariables = {
    readonly input: FollowArtistInput;
};
export declare type FollowArtistMutationResponse = {
    readonly followArtist: ({
        readonly artist: ({
            readonly __id: string;
            readonly is_followed: boolean | null;
        }) | null;
    }) | null;
};
export declare type FollowArtistMutation = {
    readonly response: FollowArtistMutationResponse;
    readonly variables: FollowArtistMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
