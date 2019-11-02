import { Save_artwork } from "__generated__/Save_artwork.graphql";
import * as Artsy from "Artsy";
import React from "react";
import { RelayProp } from "react-relay";
import { TrackingProp } from "react-tracking";
import * as RelayRuntimeTypes from "relay-runtime";
export interface SaveTrackingProps {
    context_page?: string;
}
export interface SaveProps extends Artsy.SystemContextProps, React.HTMLProps<React.ComponentType> {
    artwork: Save_artwork;
    style?: any;
    relay?: RelayProp;
    relayEnvironment?: RelayRuntimeTypes.Environment;
    mediator?: Artsy.Mediator;
    render?: (props: any, state: any) => JSX.Element;
    trackingData?: SaveTrackingProps;
    tracking?: TrackingProp;
}
export interface SaveState {
    is_saved: boolean;
    isHovered: boolean;
}
export declare class SaveButton extends React.Component<SaveProps, SaveState> {
    state: {
        is_saved: any;
        isHovered: boolean;
    };
    readonly isSaved: any;
    trackSave: () => void;
    handleSave(): void;
    mixinButtonActions(): {
        onClick: () => void;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
    renderDefaultButton(): JSX.Element;
    renderCustomButton(): JSX.Element;
    render(): JSX.Element;
}
export declare const Container: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export default _default;
