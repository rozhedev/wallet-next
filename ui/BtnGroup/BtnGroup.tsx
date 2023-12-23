import React, { FC } from "react";
import { TBtnGroup } from "./types";

const BtnGroup: FC<TBtnGroup> = ({className, children}) => {
    return (
        <div className={className}>{children}</div>
    );
};

export default BtnGroup;
