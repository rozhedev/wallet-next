"use client";

import React, { FC } from "react";
import type { TPromoactionsItem } from "./types";
import Link from "next/link";

export const PromoactionsItem: FC<TPromoactionsItem> = ({ title, tags, btnLabel, isLink, linkHref }) => {
    return (
        <div className="promoactions-item">
            <div className="promoactions-item__content">
                <h4 className="h4">{title}</h4>
                <div className="hashtag-container">
                    {tags.map((tag, index) => (
                        <span key={index} className="hashtag-item" data-tag={tag}>{tag}</span>
                    ))}
                </div>

                {isLink ? (
                    <Link
                        href={linkHref}
                        className="btn btn-fill-sm"
                    >
                        {btnLabel}
                    </Link>
                ) : (
                    <button
                        type="button"
                        className="btn btn-fill-sm"
                    >
                        <span>{btnLabel}</span>
                    </button>
                )}
            </div>
        </div>
    );
};

