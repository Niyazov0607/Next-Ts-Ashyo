import React from "react";
import Button from "./Button";
import { ArrowDown, SearchIcon } from "@/assets/icons";
import Input from "./Input";

const HeaderForm = () => {
    return (
        <div className="flex items-center gap-5">
            <Button
                text="Kategorya"
                iconPosition="right"
                icon={<ArrowDown />}
            />
            <div className="w-[518px] relative">
                <Input
                    placeholder="What are you looking for?"
                    type="text"
                    extraStyle="!w-full"
                />
                <div className="absolute right-0 top-0 h-full flex items-center">
                    <Button
                        extraStyle="!w-12 !h-12 !p-0"
                        icon={<SearchIcon />}
                        iconPosition="right"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderForm;
