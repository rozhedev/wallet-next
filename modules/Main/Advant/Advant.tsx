import React, { FC } from "react";
import Link from "next/link";

import type { TAdvantProps } from "./types";
import AdvantItem, { type TMainAdvantItem } from "@/components/items/AdvantItem";

export const Advant: FC<TAdvantProps> = ({ dataArr }) => {
    return (
        <>
            <h2 className="h1 section-title">Why Flem Wallet?</h2>
            <div className="inner">
                {dataArr.map((item: TMainAdvantItem) => (
                    <AdvantItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        descr={item.descr}
                        svgIcon={item.svgIcon}
                    />
                ))}
            </div>
            <div>
                <Link
                    href="/register"
                    className="btn btn-fill"
                    scroll={false}
                >
                    <span>Register wallet</span>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                        <path d="M20.5715 33.6687C20.5715 33.6687 9.04005 36.7316 6.8572 42.8116C4.85758 48.1088 4.07635 53.7883 4.57148 59.4287H32.0001" />
                        <path d="M50.2856 59.4285V41.1428" />
                        <path d="M41.1428 50.2856H59.4285" />
                    </svg>
                </Link>
            </div>
        </>
    );
};
