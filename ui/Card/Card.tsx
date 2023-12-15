import React, { FC } from "react";
import { TCard } from "./types";

const Card: FC<TCard> = ({className, children}) => {
    return (
        <div className={className}>{children}</div>
    );
};

export default Card;
