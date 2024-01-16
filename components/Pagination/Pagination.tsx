import React, { FC, useState } from "react";
import { TPaginationProps } from "./types";
import Btn from "@/ui/Btn/Btn";
import { chevronBottomIcon } from "@/data/pages/ui-icons";

export const Pagination: FC<TPaginationProps> = ({ btnsArr }) => {
    const [isActiveId, setIsActiveId] = useState<number>(1);
    const isFirstBtnActive = isActiveId === btnsArr[0].id;
    const isLastBtnActive = isActiveId === btnsArr.length;

    return (
        <nav className="pagination-container">
            <Btn
                type="button"
                id="prev-button"
                className="pagination-button"
                aria-label="Previous page"
                title="Previous page"
                onClick={() => {
                    if (isFirstBtnActive) return;
                    setIsActiveId(isActiveId - 1);
                }}
                disabled={isFirstBtnActive && true}
            >
                {chevronBottomIcon}
            </Btn>
            <div
                id="pagination-numbers"
                className="pagination-numbers"
            >
                {btnsArr.map((btn) => (
                    <Btn
                        key={btn.id}
                        type="button"
                        className={`pagination-number ${isActiveId === btn.id && "_active"}`}
                        title={btn.title}
                        onClick={() => setIsActiveId(btn.id)}
                    >
                        <span>{btn.id}</span>
                    </Btn>
                ))}
            </div>
            <Btn
                type="button"
                id="next-button"
                className="pagination-button"
                aria-label="Next page"
                title="Next page"
                onClick={() => {
                    if (isLastBtnActive) return;
                    setIsActiveId(isActiveId + 1);
                }}
                disabled={isLastBtnActive && true}
            >
                {chevronBottomIcon}
            </Btn>
        </nav>
    );
};
