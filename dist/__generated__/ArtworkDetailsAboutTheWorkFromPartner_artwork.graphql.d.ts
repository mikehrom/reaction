import { ConcreteFragment } from "relay-runtime";
import { FollowProfileButton_profile$ref } from "./FollowProfileButton_profile.graphql";
declare const _ArtworkDetailsAboutTheWorkFromPartner_artwork$ref: unique symbol;
export declare type ArtworkDetailsAboutTheWorkFromPartner_artwork$ref = typeof _ArtworkDetailsAboutTheWorkFromPartner_artwork$ref;
export declare type ArtworkDetailsAboutTheWorkFromPartner_artwork = {
    readonly additional_information: string | null;
    readonly sale: ({
        readonly isBenefit: boolean | null;
        readonly isGalleryAuction: boolean | null;
    }) | null;
    readonly partner: ({
        readonly _id: string;
        readonly id: string;
        readonly type: string | null;
        readonly href: string | null;
        readonly name: string | null;
        readonly initials: string | null;
        readonly locations: ReadonlyArray<({
            readonly city: string | null;
        }) | null> | null;
        readonly is_default_profile_public: boolean | null;
        readonly profile: ({
            readonly id: string;
            readonly icon: ({
                readonly url: string | null;
            }) | null;
            readonly " $fragmentRefs": FollowProfileButton_profile$ref;
        }) | null;
    }) | null;
    readonly " $refType": ArtworkDetailsAboutTheWorkFromPartner_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
