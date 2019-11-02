export declare const SingleFollowedArtist: {
    artists: {
        __id: string;
        _id: string;
        id: string;
        name: string;
        href: string;
        is_followed: boolean;
        counts: {
            follows: number;
        };
        related: any;
    }[];
    cultural_maker: any;
};
export declare const SingleNonFollowedArtist: {
    artists: {
        _id: string;
        __id: string;
        id: string;
        name: string;
        href: string;
        is_followed: boolean;
        counts: {
            follows: number;
        };
        related: any;
    }[];
    cultural_maker: any;
};
export declare const MultipleArtists: {
    artists: {
        __id: string;
        _id: string;
        id: string;
        name: string;
        href: string;
        is_followed: boolean;
        counts: {
            follows: number;
        };
        related: any;
    }[];
    cultural_maker: any;
};
export declare const CulturalMakerWork: {
    artists: any[];
    cultural_maker: string;
};
