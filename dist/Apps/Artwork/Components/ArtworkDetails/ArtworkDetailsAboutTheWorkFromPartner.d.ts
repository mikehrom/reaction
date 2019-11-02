import React from "react";
import { ArtworkDetailsAboutTheWorkFromPartner_artwork } from "__generated__/ArtworkDetailsAboutTheWorkFromPartner_artwork.graphql";
export interface ArtworkDetailsAboutTheWorkFromPartnerProps {
    artwork: ArtworkDetailsAboutTheWorkFromPartner_artwork;
}
export declare class ArtworkDetailsAboutTheWorkFromPartner extends React.Component<ArtworkDetailsAboutTheWorkFromPartnerProps> {
    trackReadMoreClick(): void;
    handleOpenAuth: (mediator: any, partner: any) => void;
    renderReadMore(breakpoint?: string): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkDetailsAboutTheWorkFromPartnerFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkDetailsAboutTheWorkFromPartnerProps, "artwork">> & import("react-relay").ComponentRef>;
