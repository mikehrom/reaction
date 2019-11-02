export declare const ArtworkDetailsFixture: {
    id: string;
    description: string;
    additional_information: string;
    partner: {
        id: string;
        _id: string;
        href: string;
        is_default_profile_public: boolean;
        type: string;
        name: string;
        initials: string;
        locations: {
            city: string;
        }[];
        profile: {
            __id: string;
            is_followed: boolean;
            icon: {
                url: string;
            };
        };
    };
    framed: {
        label: string;
        details: any;
    };
    signatureInfo: {
        label: string;
        details: string;
    };
    conditionDescription: {
        label: string;
        details: string;
    };
    certificateOfAuthenticity: {
        label: string;
        details: string;
    };
    series: string;
    publisher: string;
    manufacturer: string;
    provenance: string;
    image_rights: string;
    articles: {
        author: {
            name: string;
        };
        href: string;
        published_at: string;
        thumbnail_image: {
            resized: {
                url: string;
            };
        };
        thumbnail_title: string;
    }[];
    literature: string;
    exhibition_history: string;
    sale: any;
};
