import React from "react";
import { LeftProps, RightProps } from "styled-system";
/**
 * Do NOT use `FlickityType` to create instances of Flickity. Only refer to it
 * for type purposes.
 *
 * @see BaseCarousel.prototype.componentDidMount()
 */
import FlickityType, { Options as FlickityOptions } from "flickity";
/**
 * Notes:
 * - We have the commercial license, which allows us to use this in our MIT licensed codebase,
 * but non-Artsy devs would technically be using the gplv3 version.
 * - For LazyLoad use Palette's Image lazyLoad prop instead of Flickities
 */
interface CarouselProps {
    /**
     * This is designed to handle any shape of data passed, as long as its an array
     */
    data: any;
    /**
     * Passes CarouselRef
     */
    setCarouselRef?: (CarouselRef: any) => void;
    /**
     * If this carousel contains only one visible image on render set to true (for SSR)
     */
    oneSlideVisible?: boolean;
    /**
     * The height of the carousel
     */
    height?: string;
    /**
     * The width of the carousel
     */
    width?: string;
    /**
     * Callback when forward / backward arrows are clicked
     */
    onArrowClick?: ({ props: CarouselProps, state: BaseCarouselState, flickity: FlickityOptions, }: {
        props: any;
        state: any;
        flickity: any;
    }) => void;
    /**
     * The render callback returns an image to display
     */
    render: (slide: any, slideIndex: number) => React.ReactNode;
    /**
     * Flickity options
     */
    options?: FlickityOptions;
    /**
     * Pass an optional position for left and right for the arrow wrapper element otherwise defaults to -40
     */
    arrowPosition?: number;
    /**
     * Show or hide arrows. Defaults to true
     */
    showArrows?: boolean;
    /**
     * Custom renderer for the left arrow
     */
    renderLeftArrow?: ArrowProps;
    /**
     * Custom renderer for the right arrow
     */
    renderRightArrow?: ArrowProps;
}
declare type ArrowProps = (props: {
    currentSlideIndex: number;
    Arrow: React.ReactType;
    flickity: FlickityType;
}) => React.ReactNode;
export declare class Carousel extends React.Component<CarouselProps> {
    static defaultProps: {
        height: string;
        oneSlideVisible: boolean;
    };
    render(): JSX.Element;
}
export declare const LargeCarousel: React.FC<CarouselProps>;
export declare const SmallCarousel: React.FC<CarouselProps>;
interface BaseCarouselState {
    currentSlideIndex: number;
    lastItemVisible: boolean;
    isMounted: boolean;
}
export declare class BaseCarousel extends React.Component<CarouselProps, BaseCarouselState> {
    state: {
        currentSlideIndex: number;
        lastItemVisible: boolean;
        isMounted: boolean;
    };
    /**
     * A reference to the Flickity instance
     */
    flickity: FlickityType;
    carouselRef: any;
    /**
     * Options to pass to underlying flickity component
     */
    options: FlickityOptions;
    constructor(props: any);
    allowPreventDefault: () => void;
    /**
     * Since Flickity doesn't support SSR rendering, we need to load it once the
     * client has mounted. During the server-side pass we use a Flex wrapper.
     *
     * In fact, the flickity library can't even be loaded in environments that do
     * not have a global `window` object. Thus we need to lazy load it here with
     * an inline `require` statement.
     */
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleSlideChange: (index: any) => void;
    checkLastItemVisible: () => boolean;
    renderLeftArrow: () => {};
    renderRightArrow: () => {};
    render(): JSX.Element;
}
export declare const ArrowButton: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps & LeftProps<string | number> & RightProps<string | number> & {
    height?: string;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").FlexProps & LeftProps<string | number> & RightProps<string | number> & {
    height?: string;
}>;
export {};
