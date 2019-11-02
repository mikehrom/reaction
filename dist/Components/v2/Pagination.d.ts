import React from "react";
import { Pagination_pageCursors } from "__generated__/Pagination_pageCursors.graphql";
interface Props {
    onClick?: (cursor: string, page: number) => void;
    onNext?: () => void;
    pageCursors: Pagination_pageCursors;
    hasNextPage: boolean;
    scrollTo?: string;
}
export declare class Pagination extends React.Component<Props> {
    static defaultProps: {
        onClick: (_cursor: any) => {};
        onNext: () => {};
        scrollTo: any;
    };
    render(): JSX.Element;
}
export declare const PaginationFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "onClick" | "onNext" | "pageCursors" | "hasNextPage" | "scrollTo">> & import("react-relay").ComponentRef>;
export {};
