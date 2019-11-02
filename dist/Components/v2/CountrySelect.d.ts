/// <reference types="react" />
import { PositionProps, SpaceProps } from "styled-system";
export interface CountrySelectProps extends PositionProps, SpaceProps {
    selected?: string;
    disabled?: boolean;
    onSelect?: (value: any) => void;
}
export declare const CountrySelect: (props: CountrySelectProps) => JSX.Element;
export declare const COUNTRY_CODE_TO_COUNTRY_NAME: {};
