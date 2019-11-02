import React, { Component } from "react";
interface Props extends React.HTMLProps<HTMLDivElement> {
    isMuted: boolean;
    isPlaying: boolean;
    title: string;
    duration: number;
    currentTime: number;
    toggleFullscreen: () => void;
    toggleMute: () => void;
    togglePlay: () => void;
    pause: () => void;
    play: () => void;
    seekTo: (v: any) => void;
}
export declare class VideoControls extends Component<Props, null> {
    render(): JSX.Element;
}
export declare const VideoControlsContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
