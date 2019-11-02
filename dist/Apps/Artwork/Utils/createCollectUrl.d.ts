export declare const createCollectUrl: ({ dimension, category, artistId, }: {
    dimension: "MEDIUM" | "LARGE" | "SMALL";
    category: "Design/Decorative Art" | "Photography" | "Jewelry" | "Painting" | "Sculpture" | "Work on Paper" | "Installation" | "Performance Art" | "Drawing, Collage or other Work on Paper" | "Architecture" | "Books and Portfolios" | "Fashion Design and Wearable Art" | "Mixed Media" | "Other" | "Posters" | "Print" | "Sound" | "Textile Arts" | "Video/Film/Animation";
    artistId: string;
}) => string;
export declare type FilterCategory = keyof typeof filterCategories;
declare const filterCategories: {
    Architecture: string;
    "Books and Portfolios": string;
    "Design/Decorative Art": string;
    "Drawing, Collage or other Work on Paper": string;
    "Fashion Design and Wearable Art": string;
    Installation: string;
    Jewelry: string;
    "Mixed Media": string;
    Other: string;
    Painting: string;
    "Performance Art": string;
    Photography: string;
    Posters: string;
    Print: string;
    Sculpture: string;
    Sound: string;
    "Textile Arts": string;
    "Video/Film/Animation": string;
    "Work on Paper": string;
};
export {};
