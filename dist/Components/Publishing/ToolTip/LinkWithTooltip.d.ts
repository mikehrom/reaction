import PropTypes from "prop-types";
import React, { Component } from "react";
import { TrackingProp } from "react-tracking";
interface Props {
    color?: string;
    url: string;
    tracking?: TrackingProp;
}
interface State {
    inToolTip: boolean;
    maybeHideToolTip: boolean;
    position: ClientRect;
    orientation?: string;
}
export declare class LinkWithTooltip extends Component<Props, State> {
    static contextTypes: {
        tooltipsData: PropTypes.Requireable<object>;
        onTriggerToolTip: PropTypes.Requireable<(...args: any[]) => any>;
        activeToolTip: PropTypes.Requireable<any>;
        waitForFade: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        color: string;
    };
    link: any;
    SetupToolTipPosition: any;
    state: {
        inToolTip: boolean;
        maybeHideToolTip: boolean;
        position: any;
        orientation: string;
    };
    urlToEntityType(): {
        entityType: string;
        slug: string;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    entityTypeToEntity: () => {
        entityType: string;
        entity: any;
    };
    showToolTip: (toolTipData: any) => void;
    trackClick: (toolTipData: any) => void;
    leftLink: () => void;
    hideToolTip: () => void;
    maybeHideToolTip: () => void;
    onLeaveLink: () => void;
    getToolTipPosition: (type: any) => {
        arrowLeft: any;
        toolTipLeft: number;
    };
    getOrientation: (position: any) => "up" | "down";
    setupToolTipPosition: () => void;
    render(): JSX.Element;
}
export declare const PrimaryLink: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: string;
    show: boolean;
}, any, React.ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    color?: string;
    show: boolean;
}>;
export declare const Link: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    onMouseEnter: any;
    show: boolean;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    onMouseEnter: any;
    show: boolean;
}>;
export declare const Background: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, any, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
declare const _default: typeof LinkWithTooltip;
export default _default;
