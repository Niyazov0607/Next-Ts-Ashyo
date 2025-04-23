import {
    CompareIcon,
    LikeIcon,
    ProfileIcon,
    ShoppingCartIcon,
} from "@/assets/icons";
import HeaderActions from "@/components/HeaderActions";
import React from "react";

const HeaderCenterActions = () => {
    const actions = [
        { id: 1, icon: <CompareIcon />, actionCount: 2 },
        { id: 2, icon: <LikeIcon />, actionCount: 11 },
        { id: 3, icon: <ShoppingCartIcon />, actionCount: 7 },
        { id: 4, icon: <ProfileIcon />, actionCount: 0 },
    ];

    return (
        <div className="flex items-center gap-[15px] cursor-pointer">
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
