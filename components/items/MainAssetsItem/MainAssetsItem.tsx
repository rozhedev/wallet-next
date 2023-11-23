import React, { FC } from "react";
import type { TMainAssetsItem } from "./types";
import { TAllCurNotesScope } from "@/types/data/currencies";
import Image from "next/image";

export const MainAssetsItem: FC<TMainAssetsItem<TAllCurNotesScope>> = ({ id, disabled, imgPath, imgAlt, title }) => {
    return (
        <button
            type="button"
            id={id}
            className="main-assets-item"
            disabled={disabled}
            data-placement="top"
            data-tippy-content={title}
        >
            <Image
                src={imgPath}
                alt={imgAlt}
                width={40}
                height={40}
                className="main-assets-item__img"
            ></Image>
        </button>
    );
};
