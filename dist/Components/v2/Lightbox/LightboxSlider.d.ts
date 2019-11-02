import { SFC } from "react";
export interface SliderProps {
    min: number;
    max: number;
    step: number;
    value: number;
    onChange?: (Event: any) => void;
    onZoomInClicked?: () => void;
    onZoomOutClicked?: () => void;
}
export declare const Slider: SFC<SliderProps>;
