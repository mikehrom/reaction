export declare const ForSaleArtworkNoEditions: {
    __id: string;
    availability: string;
    sale_message: string;
    is_inquireable: boolean;
    is_price_range: boolean;
    edition_sets: any[];
    id: string;
    _id: string;
    is_acquireable: boolean;
    is_offerable: boolean;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    shippingInfo: string;
    shippingOrigin: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ForSaleArtworkWithOneEdition: {
    __id: string;
    availability: string;
    sale_message: string;
    is_inquireable: boolean;
    is_price_range: boolean;
    edition_sets: {
        __id: string;
        sale_message: string;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
        is_acquireable: boolean;
        is_offerable: boolean;
    }[];
    id: string;
    _id: string;
    is_acquireable: boolean;
    is_offerable: boolean;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    shippingInfo: string;
    shippingOrigin: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ForSaleArtworkWithMultipleEditions: {
    __id: string;
    availability: string;
    sale_message: string;
    is_inquireable: boolean;
    is_price_range: boolean;
    edition_sets: {
        __id: string;
        sale_message: string;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
        is_acquireable: boolean;
        is_offerable: boolean;
    }[];
    id: string;
    _id: string;
    is_acquireable: boolean;
    is_offerable: boolean;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    shippingInfo: string;
    shippingOrigin: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ContactForPriceWork: {
    __id: string;
    availability: string;
    sale_message: string;
    is_inquireable: boolean;
    is_price_range: boolean;
    edition_sets: {
        __id: string;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
        is_acquireable: boolean;
        is_offerable: boolean;
        sale_message: string;
    }[];
    id: string;
    _id: string;
    is_acquireable: boolean;
    is_offerable: boolean;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    shippingInfo: string;
    shippingOrigin: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkOfferableAndInquireable: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    edition_sets: any[];
    shippingInfo: string;
    shippingOrigin: string;
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    is_price_range: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkBuyNow: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    edition_sets: any[];
    shippingInfo: string;
    shippingOrigin: string;
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    is_price_range: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkBuyNowWithMultipleEditions: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    is_price_range: boolean;
    shippingInfo: string;
    shippingOrigin: string;
    edition_sets: {
        id: string;
        __id: string;
        sale_message: string;
        is_acquireable: boolean;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
        is_offerable: boolean;
    }[];
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkBuyNowSoldWithMultipleEditions: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    is_price_range: boolean;
    pickup_available: boolean;
    shippingInfo: string;
    shippingOrigin: string;
    edition_sets: {
        __id: string;
        is_acquireable: boolean;
        sale_message: string;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
        is_offerable: boolean;
    }[];
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkSold: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    edition_sets: any[];
    shippingInfo: any;
    shippingOrigin: any;
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    is_price_range: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkMakeOffer: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    edition_sets: any[];
    shippingInfo: string;
    shippingOrigin: string;
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    is_price_range: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkBuyNowMakeOffer: {
    __id: string;
    sale_message: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    edition_sets: any[];
    shippingInfo: string;
    shippingOrigin: string;
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    is_price_range: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
export declare const ArtworkSingleEditionHiddenAvailability: {
    __id: string;
    is_acquireable: boolean;
    is_inquireable: boolean;
    is_offerable: boolean;
    pickup_available: boolean;
    sale_message: any;
    shippingInfo: string;
    shippingOrigin: any;
    edition_sets: {
        id: string;
        __id: string;
        is_acquireable: boolean;
        is_offerable: boolean;
        sale_message: any;
        dimensions: {
            in: string;
            cm: string;
        };
        edition_of: string;
    }[];
    id: string;
    _id: string;
    availability: string;
    price: string;
    is_in_auction: boolean;
    artists: {
        id: string;
        _id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            suggested: any;
        };
        is_consignable: boolean;
    }[];
    artist: {
        _id: string;
        id: string;
        name: string;
        href: string;
        image: {
            cropped: {
                url: string;
            };
            __id: string;
        };
        formatted_nationality_and_birthday: string;
        counts: {
            partner_shows: number;
            follows: number;
        };
        exhibition_highlights: {
            partner: {
                __typename: string;
                name: string;
                __id: string;
            };
            name: string;
            start_at: string;
            cover_image: {
                cropped: {
                    url: string;
                };
                __id: any;
            };
            city: string;
            __id: string;
        }[];
        collections: string[];
        highlights: {
            partners: {
                edges: {
                    node: {
                        __typename: string;
                        __id: string;
                        categories: {
                            id: string;
                            __id: string;
                        }[];
                    };
                    __id: string;
                }[];
            };
        };
        auctionResults: {
            edges: {
                node: {
                    __typename: string;
                    __id: string;
                    price_realized: {
                        display: string;
                    };
                    organization: string;
                    sale_date: string;
                };
            }[];
        };
        biography_blurb: {
            text: string;
        };
        __id: string;
        is_followed: boolean;
        related: {
            artists: {
                pageInfo: {
                    hasNextPage: boolean;
                    endCursor: string;
                };
                edges: {
                    node: {
                        name: string;
                        id: string;
                        href: string;
                        image: {
                            cropped: {
                                url: string;
                            };
                            __id: string;
                        };
                        formatted_nationality_and_birthday: string;
                        __id: string;
                        is_followed: boolean;
                        counts: {
                            follows: number;
                        };
                        __typename: string;
                    };
                    cursor: string;
                }[];
            };
        };
    };
    href: string;
    date: string;
    artist_names: string;
    partner: {
        name: string;
        __id: string;
        type: string;
        profile: {
            image: {
                resized: {
                    url: string;
                };
                __id: string;
            };
            __id: string;
            id: string;
            is_followed: boolean;
            icon: {
                url: string;
                __id: string;
            };
        };
        initials: string;
        href: string;
        locations: {
            city: string;
            __id: string;
        }[];
        isVerifiedSeller: boolean;
        _id: string;
        id: string;
        is_default_profile_public: boolean;
    };
    image_rights: string;
    is_shareable: boolean;
    meta_image: {
        resized: {
            width: number;
            height: number;
            url: string;
        };
        __id: string;
    };
    meta: {
        title: string;
        description: string;
        long_description: string;
    };
    context: any;
    is_price_hidden: boolean;
    is_price_range: boolean;
    price_currency: string;
    category: string;
    dimensions: {
        in: string;
        cm: string;
    };
    sale: any;
    artworkContextAuction: any;
    artworkContextFair: any;
    artworkContextPartnerShow: any;
    cultural_maker: any;
    is_biddable: boolean;
    sale_artwork: any;
    title: string;
    medium: string;
    edition_of: any;
    attribution_class: any;
    myLotStanding: any;
    is_for_sale: boolean;
    priceIncludesTaxDisplay: any;
    hasCertificateOfAuthenticity: boolean;
    description: any;
    additional_information: any;
    series: any;
    publisher: any;
    manufacturer: any;
    framed: any;
    signatureInfo: any;
    conditionDescription: any;
    certificateOfAuthenticity: any;
    articles: any[];
    literature: any;
    exhibition_history: any;
    provenance: any;
    image_alt: string;
    is_saved: boolean;
    images: {
        url: string;
        __id: string;
        id: string;
        uri: string;
        placeholder: {
            url: string;
        };
        aspectRatio: number;
        is_zoomable: boolean;
        is_default: boolean;
        deepZoom: {
            Image: {
                xmlns: string;
                Url: string;
                Format: string;
                TileSize: number;
                Overlap: number;
                Size: {
                    Width: number;
                    Height: number;
                };
            };
        };
    }[];
    artworkMeta: {
        share: string;
    };
    image: {
        id: string;
        url: string;
        height: number;
        width: number;
        __id: string;
    };
    is_downloadable: boolean;
    is_hangable: boolean;
    contextGrids: {
        __typename: string;
        title: string;
        ctaTitle: string;
        ctaHref: string;
        artworks: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: {
                        is_auction: boolean;
                        is_closed: boolean;
                        __id: string;
                        is_live_open: boolean;
                        is_open: boolean;
                        is_preview: boolean;
                        display_timely_at: string;
                    };
                    sale_artwork: {
                        counts: {
                            bidder_positions: number;
                        };
                        highest_bid: {
                            display: string;
                            __id: string;
                        };
                        opening_bid: {
                            display: string;
                        };
                        __id: string;
                    };
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
    }[];
    layers: {
        name: string;
        id: string;
        __id: string;
    }[];
    layer: {
        name: string;
        artworksConnection: {
            edges: {
                node: {
                    __id: string;
                    id: string;
                    href: string;
                    image: {
                        aspect_ratio: number;
                        __id: string;
                        placeholder: string;
                        url: string;
                    };
                    _id: string;
                    title: string;
                    image_title: string;
                    date: string;
                    sale_message: string;
                    cultural_maker: any;
                    artists: {
                        __id: string;
                        href: string;
                        name: string;
                    }[];
                    collecting_institution: any;
                    partner: {
                        name: string;
                        href: string;
                        __id: string;
                        type: string;
                    };
                    sale: any;
                    sale_artwork: any;
                    is_inquireable: boolean;
                    is_saved: boolean;
                    is_biddable: boolean;
                    is_acquireable: boolean;
                    is_offerable: boolean;
                };
            }[];
        };
        __id: string;
    };
    priceCents: any;
    pricingContext: any;
};
