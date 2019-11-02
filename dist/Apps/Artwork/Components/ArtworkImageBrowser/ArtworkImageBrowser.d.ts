import { ArtworkImageBrowser_artwork } from "__generated__/ArtworkImageBrowser_artwork.graphql";
import { BaseCarousel as Carousel } from "Components/v2/Carousel";
import React from "react";
interface ArtworkBrowserProps {
    imageAlt: string;
    images: ArtworkImageBrowser_artwork["images"];
    setCarouselRef: (carouselRef: Carousel) => void;
}
export declare const ArtworkImageBrowser: (props: ArtworkBrowserProps) => JSX.Element;
export declare class LargeArtworkImageBrowser extends React.Component<ArtworkBrowserProps> {
    render(): JSX.Element;
}
export declare class SmallArtworkImageBrowser extends React.Component<ArtworkBrowserProps> {
    render(): JSX.Element;
}
export {};
