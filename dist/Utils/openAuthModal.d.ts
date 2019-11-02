import * as Schema from "Artsy/Analytics/Schema";
import { Mediator } from "Artsy/SystemContext";
interface AuthReason {
    entity: {
        id: string;
        name: string;
    };
    contextModule: Schema.ContextModule;
    intent: AuthModalIntent;
}
export declare enum AuthModalIntent {
    FollowArtist = "FollowArtist",
    FollowPartner = "FollowPartner",
    SaveArtwork = "SaveArtwork"
}
export declare const openAuthModal: (mediator: Mediator, reason: AuthReason) => void;
export {};
