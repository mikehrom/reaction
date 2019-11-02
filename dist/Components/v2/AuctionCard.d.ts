import { AuctionCard_sale } from "__generated__/AuctionCard_sale.graphql";
import { DateTime } from "luxon";
import React from "react";
export declare const relativeTime: (timeIn: any, now: any) => string;
export declare const upcomingLabel: (sale: AuctionCard_sale, now?: DateTime) => string;
export interface AuctionCardProps {
    src: string;
    href: string;
    headline: string;
    subHeadline: string;
    badge: string;
    isGalleryAuction: boolean;
    isBenefit: boolean;
}
export declare class AuctionCard extends React.Component<AuctionCardProps> {
    render(): JSX.Element;
}
export declare const LargeAuctionCard: (props: any) => JSX.Element;
export declare const SmallAuctionCard: (props: any) => JSX.Element;
export declare const AuctionCardFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<{
    sale: AuctionCard_sale;
}, "sale">> & import("react-relay").ComponentRef>;
