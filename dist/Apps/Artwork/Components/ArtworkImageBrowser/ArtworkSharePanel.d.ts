import { ArtworkSharePanel_artwork } from "__generated__/ArtworkSharePanel_artwork.graphql";
import React from "react";
interface ArtworkSharePanelProps {
    artwork: ArtworkSharePanel_artwork;
    onClose: () => void;
}
interface ArtworkSharePanelState {
    copyLabelText: string;
    copyLocked: boolean;
}
export declare class ArtworkSharePanel extends React.Component<ArtworkSharePanelProps, ArtworkSharePanelState> {
    private input;
    state: {
        copyLabelText: string;
        copyLocked: boolean;
    };
    handleCopy: () => void;
    openShareModal: ({ service, url }: {
        service: any;
        url: any;
    }) => (event: any) => void;
    renderShareButton({ service, label, message, url }: {
        service: any;
        label: any;
        message: any;
        url: any;
    }): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkSharePanelFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSharePanelProps, "artwork" | "onClose">> & import("react-relay").ComponentRef>;
export {};
