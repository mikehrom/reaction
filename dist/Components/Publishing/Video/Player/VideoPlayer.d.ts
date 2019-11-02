/// <reference types="lodash" />
import React, { Component } from "react";
import { TrackingProp } from "react-tracking";
import { StyledComponentClass } from "styled-components";
export interface VideoPlayerProps extends React.HTMLProps<HTMLDivElement> {
    url?: string;
    title?: string;
    notifyPlayToggle?: (e: any) => void;
    forcePlay?: boolean;
    tracking?: TrackingProp;
}
export interface VideoPlayerState {
    isMuted: boolean;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    idleTime: number;
    showControls: boolean;
}
export interface DivProps {
    showControls: boolean;
}
export declare class VideoPlayer extends Component<VideoPlayerProps, VideoPlayerState> {
    video: HTMLVideoElement;
    videoPlayer: HTMLDivElement;
    timer: any;
    state: {
        isMuted: boolean;
        isPlaying: boolean;
        currentTime: number;
        duration: number;
        idleTime: number;
        showControls: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    resetTimer: () => void;
    incrementTimer: () => void;
    setDuration: (e: any) => void;
    updateTime: (e: any) => void;
    togglePlay: () => void;
    toggleMute: () => void;
    forcePlay: () => void;
    toggleFullscreen(): void;
    seekTo: (value: any) => void;
    pause: () => void;
    play: () => void;
    trackProgress: () => void;
    trackDuration: ((percentComplete: any) => void) & import("lodash").MemoizedFunction;
    trackSeconds: ((secondsComplete: any) => void) & import("lodash").MemoizedFunction;
    render(): JSX.Element;
}
export declare const VideoContainer: StyledComponentClass<DivProps & React.HTMLProps<HTMLDivElement>, any, DivProps & React.HTMLProps<HTMLDivElement>>;
