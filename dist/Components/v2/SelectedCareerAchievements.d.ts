import { SelectedCareerAchievements_artist } from "__generated__/SelectedCareerAchievements_artist.graphql";
import React from "react";
export interface SelectedCareerAchievementsProps {
    artist: SelectedCareerAchievements_artist;
    border?: boolean;
    Container?: (props: {
        children: JSX.Element;
    }) => JSX.Element;
}
export declare class SelectedCareerAchievements extends React.Component<SelectedCareerAchievementsProps> {
    static defaultProps: {
        border: boolean;
    };
    state: {
        showModal: boolean;
    };
    renderAuctionHighlight(): JSX.Element;
    renderGalleryRepresentation(): JSX.Element;
    renderInsight(insight: any): JSX.Element;
    render(): JSX.Element;
}
export declare const SelectedCareerAchievementsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<SelectedCareerAchievementsProps, "border" | "artist" | "Container">> & import("react-relay").ComponentRef>;
