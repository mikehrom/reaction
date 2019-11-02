/**
 * FIXME: This file also used to handle ‘profile’ follows, as implemented in https://github.com/artsy/reaction/pull/175,
 * but this was reverted because the metaphysics PR never landed https://github.com/artsy/metaphysics/pull/662.
 *
 * When this is revisited, rather than having this file do both, it’s probably better to have an abstract implementation
 * and two specialised components that use composition to achieve the desired functionality.
 */
import { Follow_artist } from "__generated__/Follow_artist.graphql";
import * as Artsy from "Artsy";
import React from "react";
import { RelayProp } from "react-relay";
interface Props extends React.HTMLProps<FollowButton>, Artsy.SystemContextProps {
    style?: any;
    relay: RelayProp;
    artist: Follow_artist;
}
export declare const StyledFollowButton: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare class FollowButton extends React.Component<Props, null> {
    handleFollow(): void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<any, string | number | symbol>> & import("react-relay").ComponentRef>;
export default _default;
