import { ConcreteFragment } from "relay-runtime";
declare const _AuctionCard_sale$ref: unique symbol;
export declare type AuctionCard_sale$ref = typeof _AuctionCard_sale$ref;
export declare type AuctionCard_sale = {
    readonly cover_image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly isBenefit: boolean | null;
    readonly isGalleryAuction: boolean | null;
    readonly end_at: string | null;
    readonly href: string | null;
    readonly id: string;
    readonly is_live_open: boolean | null;
    readonly is_preview: boolean | null;
    readonly live_start_at: string | null;
    readonly registrationStatus: ({
        readonly id: string;
    }) | null;
    readonly is_registration_closed: boolean | null;
    readonly name: string | null;
    readonly start_at: string | null;
    readonly is_closed: boolean | null;
    readonly partner: ({
        readonly name: string | null;
    }) | null;
    readonly " $refType": AuctionCard_sale$ref;
};
declare const node: ConcreteFragment;
export default node;
