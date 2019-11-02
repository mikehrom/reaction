import { CurrentEvent_artist } from "__generated__/CurrentEvent_artist.graphql";
import React, { Component } from "react";
export interface CurrentEventProps {
    artist: CurrentEvent_artist;
}
export declare class CurrentEvent extends Component<CurrentEventProps> {
    render(): JSX.Element;
}
export declare class LargeCurrentEvent extends Component<CurrentEventProps> {
    handleClick(): void;
    render(): JSX.Element;
}
export declare const CurrentEventFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CurrentEventProps, "artist">> & import("react-relay").ComponentRef>;
