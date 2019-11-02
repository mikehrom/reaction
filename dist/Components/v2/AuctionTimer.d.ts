import { AuctionTimer_sale } from "__generated__/AuctionTimer_sale.graphql";
import React from "react";
export interface Props {
    sale: AuctionTimer_sale;
}
export declare class AuctionTimer extends React.Component<Props> {
    readonly endDate: string;
    readonly liveStartAt: string;
    render(): JSX.Element;
    labelWithTimeRemaining(): string;
    labelWithoutTimeRemaining(): "Bidding closed" | "In progress";
}
export declare const AuctionTimerFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "sale">> & import("react-relay").ComponentRef>;
export declare const AuctionTimerQueryRenderer: ({ saleID }: {
    saleID: string;
}) => JSX.Element;
