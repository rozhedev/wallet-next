import React, { FC } from "react";
import type { TAssetsTableTitle } from "./types";

export const AssetsTableTitle: FC<TAssetsTableTitle> = ({ id, title, svgIcon }) => {
    return (
        <th
            className="table-header-title"
            id={`assets-table-header-title${id}`}
        >
            {svgIcon}
            <span className="table-header-title__content navlink">{title}</span>
        </th>
    );
};
