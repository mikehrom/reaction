import { ArticleData } from "Components/Publishing/Typings";
import { Component } from "react";
interface Props {
    article: ArticleData;
    seriesArticle?: ArticleData;
    relatedArticles?: any;
    isMobile?: boolean;
}
interface State {
    isPlaying: boolean;
    hideCover: boolean;
}
export declare class VideoLayout extends Component<Props, State> {
    state: {
        isPlaying: boolean;
        hideCover: boolean;
    };
    playVideo: () => void;
    onPlayToggle: (isPlaying: any) => void;
    setHideCover: () => void;
    render(): JSX.Element;
}
export {};
