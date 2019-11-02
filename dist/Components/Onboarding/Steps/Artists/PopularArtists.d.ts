/// <reference types="react" />
import { PopularArtists_popular_artists } from "__generated__/PopularArtists_popular_artists.graphql";
import { RelayProp } from "react-relay";
import { TrackingProp } from "react-tracking";
export interface RelayProps {
    tracking?: TrackingProp;
    relay?: RelayProp;
    popular_artists: PopularArtists_popular_artists;
}
export declare const PopularArtists: (props: any) => JSX.Element;
