import { MediaData, RelatedArticleCanvasData, RelatedArticlePanelData, SectionData } from "Components/Publishing/Typings";
import { DisplayAdProps } from "../Display/DisplayAd";
import { ImageSetPreviewProps } from "../Sections/ImageSetPreview";
import { SocialEmbedProps } from "../Sections/SocialEmbed";
import { ArtistToolTipProps } from "../ToolTip/ArtistToolTip";
import { GeneProps } from "../ToolTip/GeneToolTip";
export declare const ImageCollection: SectionData;
export declare const ArtworkMissingInfo: {
    type: string;
    id: string;
    slug: string;
    title: string;
    image: string;
    partner: {};
    artists: any[];
    width: number;
    height: number;
};
export declare const ArtworkMultipleArtists: {
    type: string;
    id: string;
    slug: string;
    date: string;
    title: string;
    image: string;
    partner: {
        name: string;
        slug: string;
    };
    artists: {
        name: string;
        slug: string;
    }[];
    width: number;
    height: number;
    credit: string;
};
export declare const ArtworkLongInfo: {
    type: string;
    id: string;
    slug: string;
    date: string;
    title: string;
    image: string;
    partner: {
        name: string;
        slug: string;
    };
    artists: {
        name: string;
        slug: string;
    }[];
    artist: {
        name: string;
        slug: string;
    };
    width: number;
    height: number;
    credit: string;
};
export declare const ArtworkRegular: {
    type: string;
    id: string;
    slug: string;
    date: string;
    title: string;
    image: string;
    partner: {
        name: string;
    };
    artist: {
        name: string;
    };
    width: number;
    height: number;
    credit: string;
};
export declare const Artworks: ({
    type: string;
    id: string;
    slug: string;
    title: string;
    image: string;
    partner: {};
    artists: any[];
    width: number;
    height: number;
} | {
    type: string;
    id: string;
    slug: string;
    date: string;
    title: string;
    image: string;
    partner: {
        name: string;
    };
    artist: {
        name: string;
    };
    width: number;
    height: number;
    credit: string;
})[];
export declare const Authors: ({
    image_url: string;
    name: string;
    bio: string;
    twitter_handle: string;
} | {
    name: string;
    bio: string;
    twitter_handle: string;
    image_url?: undefined;
})[];
export declare const StandardArticleHostedAdPanel: DisplayAdProps;
export declare const StandardArticleHostedAdCanvas: DisplayAdProps;
export declare const Embeds: {
    mobile_height: number;
    height: number;
    url: string;
    layout: string;
    type: string;
}[];
export declare const SocialEmbedTwitter: SocialEmbedProps["section"];
export declare const SocialEmbedInstagram: SocialEmbedProps["section"];
export declare const HeroSections: ({
    type: string;
    url: string;
    deck: string;
} | {
    type: string;
    url: string;
    deck?: undefined;
})[];
export declare const Images: ({
    type: string;
    id: string;
    slug: string;
    date: string;
    title: string;
    image: string;
    partner: {
        name: string;
        slug: string;
    };
    artists: {
        name: string;
        slug: string;
    }[];
    artist: {
        name: string;
        slug: string;
    };
    width: number;
    height: number;
    credit: string;
    index: number;
    url?: undefined;
    caption?: undefined;
    setTitle?: undefined;
} | {
    url: string;
    type: string;
    width: number;
    height: number;
    caption: string;
    setTitle: string;
    index: number;
    id?: undefined;
    slug?: undefined;
    date?: undefined;
    title?: undefined;
    image?: undefined;
    partner?: undefined;
    artists?: undefined;
    artist?: undefined;
    credit?: undefined;
})[];
export declare const ImagesNarrow: {
    url: string;
    type: string;
    width: number;
    height: number;
    caption: string;
}[];
export declare const ImageSetFull: ImageSetPreviewProps["section"];
export declare const ImageSetMini: ImageSetPreviewProps["section"];
export declare const ImageSetFullSansTitle: ImageSetPreviewProps["section"];
export declare const ImageSetMiniSansTitle: ImageSetPreviewProps["section"];
export declare const Media: MediaData[];
export declare const RelatedPanel: RelatedArticlePanelData[];
export declare const RelatedCanvas: RelatedArticleCanvasData[];
export declare const Sponsor: {
    sponsor: {
        partner_condensed_logo: string;
        partner_light_logo: string;
        partner_dark_logo: string;
        partner_logo_link: string;
        pixel_tracking_code: string;
    };
};
export declare const Videos: ({
    url: string;
    caption: string;
    cover_image_url: string;
} | {
    url: string;
    caption?: undefined;
    cover_image_url?: undefined;
})[];
export declare const ClassicText: object[];
export declare const StandardText: object[];
export declare const FeatureText: object[];
export declare const Genes: GeneProps[];
export declare const Artists: ArtistToolTipProps[];
