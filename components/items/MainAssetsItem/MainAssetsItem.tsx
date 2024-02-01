import React, { FC } from "react";
import type { TMainAssetsItem } from "./types";
import { AllCurShortNames, TAllCurNotesScope } from "@/types/data/currencies";
import Image from "next/image";

import Tippy from "@tippyjs/react";

export const MainAssetsItem: FC<TMainAssetsItem<TAllCurNotesScope, AllCurShortNames>> = ({ id, disabled, imgPath, imgAlt, title }) => {
    return (
        <Tippy
            content={title}
            placement="top"
            delay={150}
            animation="fade"
            disabled={disabled}
        >
            <button
                type="button"
                id={id}
                className="main-assets-item"
            >
                <Image
                    src={imgPath}
                    alt={imgAlt}
                    width={40}
                    height={40}
                    className="main-assets-item__img"
                ></Image>
            </button>
        </Tippy>
    );
};
