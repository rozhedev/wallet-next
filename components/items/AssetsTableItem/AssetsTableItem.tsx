import React, { FC } from "react";
import Image from "next/image";

import type { TAssetsTableItem } from "./types";
import { TAllCurNotesScope } from "@/types/data/currencies";

export const AssetsTableItem: FC<TAssetsTableItem<TAllCurNotesScope>> = ({ order, curIconPath, curIconAlt, curName, iconPaths }) => {
    const getAviableIcon = (bool: boolean) => {
        return bool ? (
            <svg
                className="icon-checkmark"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.14282 27.4285L27.4285 45.7142L54.8571 18.2856" />
            </svg>
        ) : (
            <svg
                className="icon-unaviable"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="32"
                    cy="32.0001"
                    r="13.3333"
                />
                <circle
                    cx="32"
                    cy="32"
                    r="24"
                />
            </svg>
        );
    };

    return (
        <tr className="assets-table-item">
            <td className="assets-table-item__counter">{order}</td>
            <td className="assets-table-item__currency">
                <Image
                    className="assets-table-item__currency-img"
                    src={curIconPath}
                    alt={curIconAlt}
                />
                <span className="assets-table-item__currency-name">{curName}</span>
            </td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.sendPC)}</td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.receivePC)}</td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.sendPhone)}</td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.receivePhone)}</td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.exchange)}</td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.buy)}</td>
            <td className="assets-table-item__status">{getAviableIcon(iconPaths.stacking)}</td>
        </tr>
    );
};
