/// <reference types="react" />
import { SystemContextProps } from "Artsy";
export interface Filters {
    for_sale: boolean;
    dimension_range: string;
    price_range: string;
    medium?: string;
}
export declare type Sort = "year" | "-year" | "-partner_updated_at";
export declare type Mode = "artists" | "artworks";
export interface StateChangePayload {
    filters: Filters;
    sort: Sort;
    mode: Mode;
}
export interface Props extends SystemContextProps {
    mode: Mode;
    filters?: Partial<Filters>;
    geneID: string;
    sort?: Sort;
    onStateChange: (payload: StateChangePayload) => void;
}
export interface State extends Filters {
    mode: Mode;
    sort?: Sort;
}
export declare const Contents: (props: any) => JSX.Element;
