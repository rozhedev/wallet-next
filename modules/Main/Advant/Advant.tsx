import React, { FC } from "react";
import Link from "next/link";

import type { TAdvantProps } from "./types";
import AdvantItem, { type TMainAdvantItem } from "@/components/items/AdvantItem";
import { userAddIcon } from "@/data/pages/ui-icons";

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
                    {userAddIcon}
                </Link>
            </div>
        </>
    );
};
