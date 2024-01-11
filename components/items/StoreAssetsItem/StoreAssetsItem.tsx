import React, { FC } from "react";
import Image from "next/image";

import Btn from "@/ui/Btn/Btn";
import { TStoreAssetsItem } from "./types";
import { TAllCurNotesScope } from "@/types/data/currencies";

export const StoreAssetItem: FC<TStoreAssetsItem<TAllCurNotesScope>> = ({ curIconPath, curIconAlt, curName }) => {
    return (
        <Btn
            type="button"
            title={curName}
            className="store-asset-item"
        >
            <Image
                className="store-asset-item__currency-img"
                src={curIconPath}
                alt={curIconAlt}
            />
            <span className="store-asset-item__label navlink">{curName}</span>
            <span className="custom-plus-icon"></span>
        </Btn>
    );
};
