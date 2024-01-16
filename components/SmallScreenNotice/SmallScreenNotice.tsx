"use client";

import React, { FC, useEffect, useState } from "react";
import type { TSmallScreenNoticeProps } from "./types";
import { GRID_BREAKPOINTS } from "@/data/constants/breakpoints";
import { checkScreenWidth } from "@/utils/utils";
import { flipDeviceIcon } from "@/data/pages/ui-icons";

export const SmallScreenNotice: FC<TSmallScreenNoticeProps> = ({ className }) => {
    const [isScreenLittle, setIsScreenLittle] = useState<boolean>(false);

    // * Don't add isScreenLittle into dependencies array
    useEffect(() => {
        checkScreenWidth(GRID_BREAKPOINTS.md) && setIsScreenLittle(!isScreenLittle);
    }, []);
    return (
        <>
            {isScreenLittle && (
                <div className={className}>
                    {flipDeviceIcon}
                    <div className="small-screen-notice__content">Flip the device over for a better display of the table</div>
                </div>
            )}
        </>
    );
};
