import PropTypes from "prop-types";
import { Component } from "react";
interface Props {
    children: any;
    onSlideshowStateChange?: (state: boolean) => void;
}
interface State {
    viewerIsOpen: boolean;
    slideIndex: number;
}
export declare class FullScreenProvider extends Component<Props, State> {
    state: {
        slideIndex: number;
        viewerIsOpen: boolean;
    };
    static childContextTypes: {
        closeViewer: PropTypes.Validator<(...args: any[]) => any>;
        onViewFullscreen: PropTypes.Validator<(...args: any[]) => any>;
        openViewer: PropTypes.Validator<(...args: any[]) => any>;
        slideIndex: PropTypes.Validator<number>;
        viewerIsOpen: PropTypes.Validator<boolean>;
    };
    getChildContext(): {
        closeViewer: () => void;
        onViewFullscreen: (index: any) => void;
        openViewer: (index: any) => void;
        slideIndex: number;
        viewerIsOpen: boolean;
    };
    openViewer: (index: any) => void;
    closeViewer: () => void;
    slideshowStateChange: () => void;
    render(): any;
}
export {};
