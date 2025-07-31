export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
    badgeColor?: string;
}
