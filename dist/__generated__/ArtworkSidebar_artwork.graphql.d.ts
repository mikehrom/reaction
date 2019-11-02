import { ConcreteFragment } from "relay-runtime";
import { ArtworkSidebarArtists_artwork$ref } from "./ArtworkSidebarArtists_artwork.graphql";
import { ArtworkSidebarAuctionPartnerInfo_artwork$ref } from "./ArtworkSidebarAuctionPartnerInfo_artwork.graphql";
import { ArtworkSidebarBidAction_artwork$ref } from "./ArtworkSidebarBidAction_artwork.graphql";
import { ArtworkSidebarCommercial_artwork$ref } from "./ArtworkSidebarCommercial_artwork.graphql";
import { ArtworkSidebarCurrentBidInfo_artwork$ref } from "./ArtworkSidebarCurrentBidInfo_artwork.graphql";
import { ArtworkSidebarExtraLinks_artwork$ref } from "./ArtworkSidebarExtraLinks_artwork.graphql";
import { ArtworkSidebarMetadata_artwork$ref } from "./ArtworkSidebarMetadata_artwork.graphql";
import { ArtworkSidebarPartnerInfo_artwork$ref } from "./ArtworkSidebarPartnerInfo_artwork.graphql";
import { AuctionTimer_sale$ref } from "./AuctionTimer_sale.graphql";
import { AuthenticityCertificate_artwork$ref } from "./AuthenticityCertificate_artwork.graphql";
import { SecurePayment_artwork$ref } from "./SecurePayment_artwork.graphql";
import { VerifiedSeller_artwork$ref } from "./VerifiedSeller_artwork.graphql";
declare const _ArtworkSidebar_artwork$ref: unique symbol;
export declare type ArtworkSidebar_artwork$ref = typeof _ArtworkSidebar_artwork$ref;
export declare type ArtworkSidebar_artwork = {
    readonly is_in_auction: boolean | null;
    readonly sale: ({
        readonly is_closed: boolean | null;
        readonly " $fragmentRefs": AuctionTimer_sale$ref;
    }) | null;
    readonly " $fragmentRefs": ArtworkSidebarArtists_artwork$ref & ArtworkSidebarMetadata_artwork$ref & ArtworkSidebarAuctionPartnerInfo_artwork$ref & ArtworkSidebarCurrentBidInfo_artwork$ref & ArtworkSidebarBidAction_artwork$ref & ArtworkSidebarCommercial_artwork$ref & ArtworkSidebarPartnerInfo_artwork$ref & ArtworkSidebarExtraLinks_artwork$ref & SecurePayment_artwork$ref & VerifiedSeller_artwork$ref & AuthenticityCertificate_artwork$ref;
    readonly " $refType": ArtworkSidebar_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
