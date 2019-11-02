import { ConcreteFragment } from "relay-runtime";
declare const _ArtworkBanner_artwork$ref: unique symbol;
export declare type ArtworkBanner_artwork$ref = typeof _ArtworkBanner_artwork$ref;
export declare type ArtworkBanner_artwork = {
    readonly partner: ({
        readonly name: string | null;
        readonly initials: string | null;
    }) | null;
    readonly sale: ({
        readonly is_auction: boolean | null;
        readonly isBenefit: boolean | null;
        readonly isGalleryAuction: boolean | null;
        readonly cover_image: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly artworkContextAuction: ({
        readonly __typename: "ArtworkContextAuction";
        readonly name: string | null;
        readonly href: string | null;
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly artworkContextFair: ({
        readonly __typename: "ArtworkContextFair";
        readonly name: string | null;
        readonly href: string | null;
        readonly profile: ({
            readonly initials: string | null;
            readonly icon: ({
                readonly img: ({
                    readonly url: string | null;
                }) | null;
            }) | null;
        }) | null;
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly artworkContextPartnerShow: ({
        readonly __typename: "ArtworkContextPartnerShow";
        readonly name: string | null;
        readonly href: string | null;
        readonly status: string | null;
        readonly thumbnail: ({
            readonly img: ({
                readonly url: string | null;
            }) | null;
        }) | null;
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly " $refType": ArtworkBanner_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
