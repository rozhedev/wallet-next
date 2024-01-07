import React, { FC, useState } from "react";
import { btnsArr } from "./types";
import Btn from "@/ui/Btn/Btn";

export const Pagination: FC<{}> = ({}) => {
    const [isActiveId, setIsActiveId] = useState<number>(1);

    return (
        <nav className="pagination-container">
            <Btn
                type="button"
                id="prev-button"
                className="pagination-button"
                aria-label="Previous page"
                title="Previous page"
                onClick={() => {
                    if (isActiveId === btnsArr[0].id) return;
                    setIsActiveId(isActiveId - 1);
                }}
                disabled={isActiveId === btnsArr[0].id && true}
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
                    if (isActiveId === btnsArr.length) return;
                    setIsActiveId(isActiveId + 1);
                }}
                disabled={isActiveId === btnsArr.length && true}
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
