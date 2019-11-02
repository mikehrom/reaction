import { ArtistCard_artist } from "__generated__/ArtistCard_artist.graphql";
import { Mediator } from "Artsy";
import React, { SFC } from "react";
interface Props {
    artist: ArtistCard_artist;
    user: User;
    mediator?: Mediator;
    /** Lazy load the avatar image */
    lazyLoad?: boolean;
    onClick?: () => void;
}
export declare class ArtistCard extends React.Component<Props> {
    static defaultProps: {
        lazyLoad: boolean;
    };
    render(): JSX.Element;
}
export declare const LargeArtistCard: SFC<Props>;
export declare const SmallArtistCard: SFC<Props>;
export declare const ArtistCardFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "user" | "lazyLoad" | "onClick" | "mediator" | "artist">> & import("react-relay").ComponentRef>;
export {};
