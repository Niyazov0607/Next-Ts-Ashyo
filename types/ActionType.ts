export interface ActionType {
    icon: React.ReactNode;
    actionCount: number;
}

export interface HeaderFormType {
    id: 3;
    name: string;
    image: string;
    icon: string;
    parentCategoryId: number | null;
    createdAt: string;
    updatedAt: string;
}
