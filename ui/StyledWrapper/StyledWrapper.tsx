import React, { FC } from "react";
import { TStyledWrapper } from "./types";

const StyledWrapper: FC<TStyledWrapper> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default StyledWrapper;
