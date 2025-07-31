export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    description: string;
    features: string[];
    ingredients: string[];
    images: string[];
    badge?: string;
    badgeColor?: string;
    inStock: boolean;
    category: string;
}
