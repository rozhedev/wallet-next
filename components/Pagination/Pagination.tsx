import React, { FC, useState } from "react";
import { TPaginationProps } from "./types";
import Btn from "@/ui/Btn/Btn";

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
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                </svg>
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
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                </svg>
            </Btn>
        </nav>
    );
};
