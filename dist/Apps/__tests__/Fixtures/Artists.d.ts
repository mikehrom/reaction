export declare const SingleFollowedArtist: {
    __id: string;
    id: string;
    name: string;
    is_followed: boolean;
    is_consignable: boolean;
    href: string;
}[];
export declare const SingleNonFollowedArtist: {
    __id: string;
    id: string;
    name: string;
    is_followed: boolean;
}[];
export declare const MultipleArtists: ({
    __id: string;
    id: string;
    name: string;
    is_followed: boolean;
    href?: undefined;
} | {
    __id: string;
    id: string;
    name: string;
    href: string;
    is_followed: boolean;
})[];
