import React, { FC } from "react";
import type { TMainAssetsItem } from "./types";
import { TAllCurNotesScope } from "@/types/data/currencies";
import Image from "next/image";

import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/themes/light-border.css'; // optional

export const MainAssetsItem: FC<TMainAssetsItem<TAllCurNotesScope>> = ({ id, disabled, imgPath, imgAlt, title }) => {
    return (
        <Tippy
            content={title}
            placement="top"
            delay={150}
            animation="fade"
            disabled={disabled}
            theme="light-border"
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
