/// <reference types="react" />
export * from "./DeprecatedResponsive";
export declare const Media: import("react").ComponentType<import("@artsy/react-responsive-media/dist/Media").MediaProps<"xs" | "sm" | "md" | "xl" | "lg", "hover" | "notHover">>;
export declare const MediaContextProvider: import("react").ComponentType<import("@artsy/react-responsive-media/dist/Media").MediaContextProviderProps<"xs" | "sm" | "md" | "hover" | "xl" | "lg" | "notHover">>;
export declare const createMediaStyle: () => string;
export declare const SortedBreakpoints: ("xs" | "sm" | "md" | "xl" | "lg")[];
export declare const findBreakpointsForWidths: (fromWidth: number, throughWidth: number) => ("xs" | "sm" | "md" | "xl" | "lg")[];
export declare const findBreakpointAtWidth: (width: number) => "xs" | "sm" | "md" | "xl" | "lg";
export declare const valuesWithBreakpointProps: <T>(values: T[]) => [T, import("@artsy/react-responsive-media/dist/Media").MediaBreakpointProps<"xs" | "sm" | "md" | "xl" | "lg">][];
export declare type MatchingMediaQueries = Array<"hover" | "notHover" | (typeof SortedBreakpoints)[0]>;
