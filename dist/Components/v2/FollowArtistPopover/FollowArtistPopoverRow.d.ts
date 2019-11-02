import { FollowArtistPopoverRow_artist } from "__generated__/FollowArtistPopoverRow_artist.graphql";
import { SystemContextProps } from "Artsy";
import React from "react";
import { RelayProp } from "react-relay";
import { FollowArtistPopoverState } from "./state";
interface Props extends SystemContextProps {
    artist: FollowArtistPopoverRow_artist;
    excludeArtistIdsState?: FollowArtistPopoverState;
    relay: RelayProp;
}
export declare const FollowArtistPopoverRowFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "artist" | "excludeArtistIdsState">> & import("react-relay").ComponentRef>;
export {};
