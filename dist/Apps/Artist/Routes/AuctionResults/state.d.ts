import { Container } from "unstated";
interface StateContainer {
    selectedAuction?: any;
    page?: number;
    showModal: boolean;
    sort?: string;
}
export declare class AuctionResultsState extends Container<StateContainer> {
    state: {
        showModal: boolean;
        sort: string;
        selectedAuction: any;
    };
    setPage: (page: any) => void;
    setSort: (sort: any) => void;
    showDetailsModal: (selectedAuction: any) => void;
    hideDetailsModal: () => void;
}
export {};
