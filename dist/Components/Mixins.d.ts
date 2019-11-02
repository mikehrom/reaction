import { InputProps } from "./Input";
export declare const borderedInput: (props?: InputProps & BorderProps) => import("styled-components").InterpolationValue[];
export interface BorderProps {
    hasError?: boolean;
}
export declare const border: (props?: BorderProps) => import("styled-components").InterpolationValue[];
