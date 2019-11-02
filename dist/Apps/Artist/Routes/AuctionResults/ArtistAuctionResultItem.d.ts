import { ArtistAuctionResultItem_auctionResult } from "__generated__/ArtistAuctionResultItem_auctionResult.graphql";
import { SystemContextProps } from "Artsy";
import { Mediator } from "Artsy";
import React, { SFC } from "react";
export interface Props extends SystemContextProps {
    auctionResult: ArtistAuctionResultItem_auctionResult;
    mediator?: Mediator;
    lastChild: boolean;
}
export declare const ArtistAuctionResultItem: SFC<Props>;
export declare const AuctionResultItemFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "lastChild" | "auctionResult">> & import("react-relay").ComponentRef>;
