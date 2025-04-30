export interface CategoryType {
    id: number;
    name: string;
    image: string;
    parentCategoryId: null | number;
    subCategories: CategoryType[];
    updatedAt: string;
}
