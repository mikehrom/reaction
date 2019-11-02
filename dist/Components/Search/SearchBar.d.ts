import { SearchBar_viewer } from "__generated__/SearchBar_viewer.graphql";
import { SystemContextProps } from "Artsy";
import React, { Component } from "react";
import { RelayRefetchProp } from "react-relay";
export interface Props extends SystemContextProps {
    relay: RelayRefetchProp;
    viewer: SearchBar_viewer;
}
interface State {
    term: string;
    entityID: string;
    entityType: string;
    focused: boolean;
}
export declare class SearchBar extends Component<Props, State> {
    input: HTMLInputElement;
    private userClickedOnDescendant;
    state: {
        term: string;
        entityID: any;
        entityType: any;
        focused: boolean;
    };
    throttledOnSuggestionHighlighted: ({ suggestion }: {
        suggestion: any;
    }) => void;
    trackSearch(_term: any, _hasResults: any): void;
    throttledFetch: ({ value: term }: {
        value: any;
    }) => void;
    componentDidMount(): void;
    reportPerformanceMeasurement: (performanceStart: any) => void;
    searchTextChanged: (_e: any, { newValue: term }: {
        newValue: any;
    }) => void;
    onFocus(): void;
    onBlur: (event: any) => void;
    onSuggestionsClearRequested: (e: any) => void;
    onSuggestionSelected({ suggestion: { node: { href }, }, }: {
        suggestion: {
            node: {
                href: any;
            };
        };
    }): void;
    renderSuggestionsContainer: ({ containerProps, children, query }: {
        containerProps: any;
        children: any;
        query: any;
    }) => JSX.Element;
    getSuggestionValue: ({ node: { displayLabel } }: {
        node: {
            displayLabel: any;
        };
    }) => any;
    renderSuggestion: (edge: any, rest: any) => JSX.Element;
    renderFirstSuggestion: (edge: any, { query, isHighlighted }: {
        query: any;
        isHighlighted: any;
    }) => JSX.Element;
    renderDefaultSuggestion: (edge: any, { query, isHighlighted }: {
        query: any;
        isHighlighted: any;
    }) => JSX.Element;
    renderInputComponent: (props: any) => JSX.Element;
    renderAutosuggestComponent({ xs }: {
        xs: any;
    }): JSX.Element;
    render(): JSX.Element;
}
export declare const SearchBarRefetchContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "isEigen" | "isFetching" | "mediator" | "notificationCount" | "relayEnvironment" | "searchQuery" | "setIsFetching" | "viewer">> & import("react-relay").ComponentRef>;
export declare const SearchBarQueryRenderer: React.FC;
export declare function getSearchTerm(location: Location): string;
export {};
