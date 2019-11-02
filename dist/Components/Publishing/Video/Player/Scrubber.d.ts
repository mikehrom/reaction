import React, { Component } from "react";
interface Props extends React.HTMLProps<HTMLDivElement> {
    duration: number;
    currentTime: number;
    isPlaying: boolean;
    pause: () => void;
    play: () => void;
    seekTo: (v: any) => void;
}
interface State {
    isScrubbing: boolean;
    isPlayingOnMouseDown: boolean;
}
export declare class Scrubber extends Component<Props, State> {
    state: {
        isScrubbing: boolean;
        isPlayingOnMouseDown: boolean;
    };
    shouldComponentUpdate(nextProps: any): boolean;
    handleMouseDown: () => void;
    handleMouseUp: (e: any) => void;
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
