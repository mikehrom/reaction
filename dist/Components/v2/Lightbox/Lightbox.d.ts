/// <reference types="node" />
/// <reference types="react" />
import { SliderProps } from "./LightboxSlider";
export interface DeepZoomProps {
    Image: {
        xmlns: string;
        Url: string;
        Format: string;
        Overlap: number;
        TileSize: number;
        Size: {
            Width: number;
            Height: number;
        };
    };
}
export interface LightboxProps {
    imageAlt: string;
    deepZoom: DeepZoomProps;
    enabled?: boolean;
    isDefault?: boolean;
    src: string;
    initialHeight?: string;
    /**
     * Id of the element to render the lightbox in
     * Defaults to lightbox-container
     */
    lightboxId?: string;
    user?: User;
}
export interface LightboxState {
    shown: boolean;
    element: Element;
    viewer: any;
    deepZoomRef: any;
    slider: SliderProps;
    showZoomSlider: boolean;
    promisedDragon: Promise<any>;
    activityTimer?: NodeJS.Timer;
}
export declare const Lightbox: (props: any) => JSX.Element;
