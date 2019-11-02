/// <reference types="react" />
import { TrackingProp } from "react-tracking";
import { FollowProps } from "../../Types";
export interface ContainerProps extends FollowProps {
    term: string;
    tracking?: TrackingProp;
}
export declare const ArtistSearchResults: (props: any) => JSX.Element;
