"use client";

import React, { FC } from "react";
import Link from "next/link";

import type { TPromoProps } from "./types";
import ScrollBtn from "@/components/ScrollBtn";
import { layersIcon } from "@/data/pages/web3-icons";
import { userIcon } from "@/data/pages/ui-icons";

export const Promo: FC<TPromoProps> = ({ title }) => {
    return (
        <div className="promo__inner">
            <h1 className="h1">{title}</h1>
            <div className="promo__btn">
                <Link
                    href="/assets"
                    className="btn btn-outline"
                    scroll={false}
                >
                    <span>Supported assets</span>
                    {layersIcon}
                </Link>
                <Link
                    href="/register"
                    className="btn btn-fill"
                    scroll={false}
                >
                    <span>Create account</span>
                    {userIcon}
                </Link>
            </div>
            <ScrollBtn
                label="Scroll down"
                goToAttr="#main-assets"
                className="btn btn-fill scroll-btn__toggle"
            />
        </div>
    );
};
