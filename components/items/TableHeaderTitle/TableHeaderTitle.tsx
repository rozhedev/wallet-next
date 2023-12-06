import React, { FC } from "react";
import type { T_TableHeaderTitle } from "./types";

export const TableHeaderTitle: FC<T_TableHeaderTitle> = ({ title, svgIcon }) => {
    return (
        <th className="table-header-title">
            {svgIcon}
            <span className="table-header-title__content navlink">{title}</span>
        </th>
    );
};
