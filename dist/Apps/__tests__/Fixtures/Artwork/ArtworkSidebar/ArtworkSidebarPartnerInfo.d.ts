export declare const ArtworkFromPartnerWithLocations: {
    _id: string;
    collecting_institution: any;
    partner: {
        __id: string;
        name: string;
        href: string;
        locations: {
            city: string;
        }[];
    };
};
export declare const ArtworkFromPartnerWithoutLocations: {
    __id: string;
    collecting_institution: any;
    partner: {
        __id: string;
        name: string;
        href: string;
        locations: any[];
    };
};
export declare const ArtworkWithCollectingInstitution: {
    collecting_institution: string;
    partner: {
        __id: string;
        name: string;
        href: string;
        locations: {
            city: string;
        }[];
    };
};
