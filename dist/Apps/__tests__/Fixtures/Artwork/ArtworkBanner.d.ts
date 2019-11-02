export declare const ArtwrorkNoBannerFixture: {
    id: string;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: any;
    };
    sale: any;
};
export declare const ArtworkAuctionBannerFixture: {
    id: string;
    artworkContextAuction: {
        __typename: string;
        name: string;
        href: string;
        is_auction: boolean;
        is_closed: boolean;
        is_open: boolean;
        live_start_at: string;
        live_url_if_open: any;
    };
    artworkContextFair: {
        __typename: string;
    };
    artworkContextPartnerShow: {
        __typename: string;
    };
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: any;
    };
    sale: {
        name: string;
        is_auction: boolean;
        isBenefit: boolean;
        isGalleryAuction: boolean;
        cover_image: {
            url: string;
        };
    };
};
export declare const ArtworkBenefitAuctionBannerFixture: {
    id: string;
    artworkContextAuction: {
        __typename: string;
        name: string;
        href: string;
        is_auction: boolean;
        is_closed: boolean;
        is_open: boolean;
        live_start_at: string;
        live_url_if_open: any;
    };
    artworkContextFair: {
        __typename: string;
    };
    artworkContextPartnerShow: {
        __typename: string;
    };
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: any;
    };
    sale: {
        is_auction: boolean;
        isBenefit: boolean;
        isGalleryAuction: boolean;
        cover_image: {
            url: string;
        };
    };
};
export declare const ArtworkFairBannerFixture: {
    id: string;
    artworkContextAuction: {
        __typename: string;
    };
    artworkContextFair: {
        __typename: string;
        name: string;
        href: string;
        isActive: boolean;
        start_at: string;
        end_at: string;
        profile: {
            initials: string;
            icon: {
                img: {
                    url: string;
                };
            };
        };
    };
    artworkContextPartnerShow: {
        __typename: string;
    };
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: {
            icon: {
                url: string;
            };
            href: string;
        };
    };
    sale: any;
};
export declare const ArtworkUpcomingShowBannerFixture: {
    id: string;
    artworkContextAuction: {
        __typename: string;
    };
    artworkContextFair: {
        __typename: string;
    };
    artworkContextPartnerShow: {
        __typename: string;
        name: string;
        href: string;
        type: string;
        status: string;
        thumbnail: {
            img: {
                url: string;
            };
        };
    };
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: {
            icon: {
                url: string;
            };
            href: string;
        };
    };
    sale: any;
};
export declare const ArtworkCurrentShowBannerFixture: {
    id: string;
    artworkContextAuction: {
        __typename: string;
    };
    artworkContextFair: {
        __typename: string;
    };
    artworkContextPartnerShow: {
        __typename: string;
        name: string;
        href: string;
        type: string;
        status: string;
        thumbnail: {
            img: {
                url: string;
            };
        };
    };
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: {
            icon: {
                url: string;
            };
            href: string;
        };
    };
    sale: any;
};
export declare const ArtworkPastShowBannerFixture: {
    id: string;
    artworkContextAuction: {
        __typename: string;
    };
    artworkContextFair: {
        __typename: string;
    };
    artworkContextPartnerShow: {
        __typename: string;
        name: string;
        href: string;
        type: string;
        status: string;
        thumbnail: {
            img: {
                url: string;
            };
        };
    };
    partner: {
        type: string;
        name: string;
        initials: string;
        profile: {
            icon: {
                url: string;
            };
            href: string;
        };
    };
    sale: any;
};
