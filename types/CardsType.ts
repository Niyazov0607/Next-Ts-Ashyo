import { CategoryType } from "./CategoryType";

export interface CardType {
    id: number;
    name: string;
    is_liked: boolean;
    category_id: string;
    description: string;
    nasiya: string;
    summary: string;
    price: number;
    rating: number;
    is_aksiya: boolean;
    brand_id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    comments: any;
    like: any;
    category: CategoryType;
    product_item: any;
}
