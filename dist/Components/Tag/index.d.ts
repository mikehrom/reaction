/// <reference types="react" />
import { SystemContextProps } from "Artsy";
export interface Filters {
    for_sale: boolean;
    dimension_range: string;
    price_range: string;
    medium: string;
}
export declare type Sort = "year" | "-year" | "-partner_updated_at";
export interface StateChangePayload {
    filters: Filters;
    sort: Sort;
}
export interface Props extends SystemContextProps {
    filters?: Partial<Filters>;
    tagID: string;
    sort?: Sort;
    onStateChange: (payload: StateChangePayload) => void;
}
export interface State extends Filters {
    sort?: Sort;
}
export declare const Contents: (props: any) => JSX.Element;
