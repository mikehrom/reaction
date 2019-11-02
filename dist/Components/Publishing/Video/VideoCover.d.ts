import React, { Component } from "react";
import { TrackingProp } from "react-tracking";
import { ArticleData, MediaData } from "Components/Publishing/Typings";
interface VideoCoverProps {
    article: ArticleData;
    description?: string;
    editDescription?: any;
    editTitle?: any;
    hideCover?: boolean;
    media: MediaData;
    playVideo?: () => void;
    seriesLink?: string;
    seriesTitle?: string;
    tracking?: TrackingProp;
}
export declare class VideoCover extends Component<VideoCoverProps> {
    onPlayClick: () => void;
    render(): JSX.Element;
}
export declare const VideoCoverAsset: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
}>;
export declare const VideoCoverContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    hideCover?: boolean;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    hideCover?: boolean;
}>;
export {};
