import { Container } from "unstated";
interface State {
    excludeArtistIds?: string[];
}
export declare class FollowArtistPopoverState extends Container<State> {
    state: {
        excludeArtistIds: any[];
    };
    constructor(props: State);
    addArtist: (artistId: string) => void;
}
export {};
