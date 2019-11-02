import { ButtonProps } from "@artsy/palette";
import * as Artsy from "Artsy";
import React from "react";
import { TrackingProp } from "react-tracking";
import { FollowArtistButton_artist } from "../../__generated__/FollowArtistButton_artist.graphql";
import { FollowTrackingData } from "./Typings";
import { RelayProp } from "react-relay";
interface Props extends React.HTMLProps<FollowArtistButton>, Artsy.SystemContextProps {
    relay?: RelayProp;
    artist?: FollowArtistButton_artist;
    tracking?: TrackingProp;
    trackingData?: FollowTrackingData;
    onOpenAuthModal?: (type: "register" | "login", config?: object) => void;
    /**
     * FIXME: Default is true due to legacy code. If false, use new @artsy/palette
     * design system <Button /> style.
     */
    useDeprecatedButtonStyle?: boolean;
    /**
     * FIXME: If useDeprecatedButtonStyle is false pass <Button> style props along
     * to new design-system buttons.
     */
    buttonProps?: Partial<ButtonProps>;
    /**
     * Custom renderer for alternative button displays
     */
    render?: (artist: FollowArtistButton_artist) => JSX.Element;
    triggerSuggestions?: boolean;
}
interface State {
    openSuggestions: boolean;
}
export declare class FollowArtistButton extends React.Component<Props, State> {
    static defaultProps: {
        useDeprecatedButtonStyle: boolean;
        buttonProps: {};
        triggerSuggestions: boolean;
    };
    state: {
        openSuggestions: boolean;
    };
    trackFollow: () => void;
    handleFollow: (e: any) => void;
    followArtistForUser: (user: any) => void;
    closePopover(): void;
    render(): JSX.Element;
}
export declare const FollowArtistButtonFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export {};
