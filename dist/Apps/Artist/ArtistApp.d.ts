import { ArtistApp_artist } from "__generated__/ArtistApp_artist.graphql";
import React from "react";
export interface ArtistAppProps {
    artist: ArtistApp_artist;
    params: {
        artistID: string;
    };
}
export declare class ArtistApp extends React.Component<ArtistAppProps> {
    render(): JSX.Element;
}
export declare const ArtistAppFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistAppProps, "artist" | "params">> & import("react-relay").ComponentRef>;
