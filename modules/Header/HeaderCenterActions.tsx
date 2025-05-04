import {
    CompareIcon,
    LikeIcon,
    ProfileIcon,
    ShoppingCartIcon,
} from "@/assets/icons";
import HeaderActions from "@/components/HeaderActions";
import React from "react";
import { Auth } from "./Auth";

const HeaderCenterActions = () => {
    const actions = [
        { id: 1, icon: <CompareIcon />, actionCount: 2 },
        { id: 2, icon: <LikeIcon />, actionCount: 11 },
        { id: 3, icon: <ShoppingCartIcon />, actionCount: 7 },
        { id: 4, icon: <Auth />, actionCount: 0 },
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[15px] justify-center cursor-pointer">
            {actions.map((action) => (
                <HeaderActions
                    key={action.id}
                    icon={action.icon}
                    actionCount={action.actionCount}
                />
            ))}
        </div>
    );
};

export default HeaderCenterActions;
