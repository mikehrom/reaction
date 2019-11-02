import { LotInfo_artwork } from "__generated__/LotInfo_artwork.graphql";
import { LotInfo_saleArtwork } from "__generated__/LotInfo_saleArtwork.graphql";
import React from "react";
import { RelayProp } from "react-relay";
interface Props {
    artwork: LotInfo_artwork;
    saleArtwork: LotInfo_saleArtwork;
    relay: RelayProp;
}
export declare const LotInfo: React.FC<Props>;
export declare const LotInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "artwork" | "saleArtwork">> & import("react-relay").ComponentRef>;
export {};
