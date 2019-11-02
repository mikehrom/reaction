import { CVItem_artist } from "__generated__/CVItem_artist.graphql";
import React, { Component } from "react";
import { RelayPaginationProp } from "react-relay";
export declare const PAGE_SIZE = 10;
export interface CVItemProps {
    relay: RelayPaginationProp;
    artist: CVItem_artist;
    category: string;
}
interface CVItemState {
    isLoading: boolean;
}
export declare class CVItem extends Component<CVItemProps, CVItemState> {
    state: {
        isLoading: boolean;
    };
    loadMore(): void;
    readonly hasMore: boolean;
    renderEntries: (entries: any, size?: any) => any;
    render(): JSX.Element;
}
export declare const CVPaginationContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CVItemProps, "artist" | "category">> & import("react-relay").ComponentRef>;
export {};
