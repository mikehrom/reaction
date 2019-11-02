import { SFC } from "react";
interface Props {
    hideDetailsModal?: () => void;
    auctionResult: {
        title: string;
        date_text: string;
        dimension_text: string;
        images: {
            thumbnail: {
                url: string;
            };
        };
        description: string;
    };
}
export declare const ArtistAuctionDetailsModal: SFC<Props>;
export {};
