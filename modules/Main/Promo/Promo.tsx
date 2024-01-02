"use client";

import React, { FC } from "react";
import Link from "next/link";

import type { TPromoProps } from "./types";
import ScrollBtn from "@/components/ScrollBtn";

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
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M59.4287 22.8571L32.0001 36.5714L4.57153 22.8571L32.0001 9.14282L59.4287 22.8571Z" />
                        <path d="M41.143 32L59.4287 41.1429L32.0001 54.8571L4.57153 41.1429L22.8572 32" />
                    </svg>
                </Link>
                <Link
                    href="/register"
                    className="btn btn-fill"
                    scroll={false}
                >
                    <span>Create account</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6685C20.5715 33.6685 9.04005 36.7313 6.8572 42.8113C4.85758 48.1086 4.07635 53.7881 4.57148 59.4285H59.4286C59.9456 53.7932 59.1878 48.1139 57.2115 42.8113C55.0058 36.7313 43.4972 33.6685 43.4972 33.6685" />
                    </svg>
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
