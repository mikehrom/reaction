import { FollowArtistPopover_artist } from "__generated__/FollowArtistPopover_artist.graphql";
import { SystemContextProps } from "Artsy";
import React from "react";
interface Props extends SystemContextProps {
    artist: FollowArtistPopover_artist;
    onClose?: () => void;
}
export declare const FollowArtistPopoverFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "artist" | "onClose">> & import("react-relay").ComponentRef>;
export declare const FollowArtistPopoverQueryRenderer: ({ artistID, }: {
    artistID: string;
}) => JSX.Element;
export {};
