import PropTypes from "prop-types";
import React from "react";
export declare const EditableChild: (type: any) => JSX.Element;
export declare const TextFromArticle: (article: any) => string;
export declare const wrapperWithContext: (context: any, contextTypes: any, children: any) => React.ComponentElement<{}, {
    getChildContext(): any;
    render(): any;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
    forceUpdate(callBack?: () => void): void;
    readonly props: Readonly<{}> & Readonly<{
        children?: React.ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
        [key: string]: React.ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
}>;
export declare const FullscreenViewerContext: {
    onViewFullscreen: (x: any) => any;
    openViewer: (x: any) => any;
    closeViewer: (x: any) => any;
    slideIndex: number;
    viewerIsOpen: boolean;
};
export declare const FullscreenViewerContextTypes: {
    onViewFullscreen: PropTypes.Requireable<(...args: any[]) => any>;
    openViewer: PropTypes.Requireable<(...args: any[]) => any>;
    closeViewer: PropTypes.Requireable<(...args: any[]) => any>;
    slideIndex: PropTypes.Requireable<number>;
    viewerIsOpen: PropTypes.Requireable<boolean>;
};
export declare const WrapperWithFullscreenContext: (children: any) => React.ComponentElement<{}, {
    getChildContext(): any;
    render(): any;
    context: any;
    setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
    forceUpdate(callBack?: () => void): void;
    readonly props: Readonly<{}> & Readonly<{
        children?: React.ReactNode;
    }>;
    state: Readonly<{}>;
    refs: {
        [key: string]: React.ReactInstance;
    };
    componentDidMount?(): void;
    shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
    componentWillUnmount?(): void;
    componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
    getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
    componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
    componentWillMount?(): void;
    UNSAFE_componentWillMount?(): void;
    componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
    componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
}>;
