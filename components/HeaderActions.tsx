import { ActionType } from "@/types/ActionType";
import React, { FC } from "react";

const HeaderActions: FC<ActionType> = ({ icon, actionCount }) => {
    return (
        <div className="w-[50px] h-[50px] relative bg-[#EBEFF3] rounded-[6px] flex items-center justify-center text-[#545D6A]">
            {icon}
            {actionCount > 0 && (
                <span className="absolute flex items-center top-[-10px] right-[-10px] bg-[#E81504] text-white justify-center rounded-full w-[20px] h-[20px] text-[10px] font-bold px-1">
                    {actionCount}
                </span>
            )}
        </div>
    );
};

export default HeaderActions;
