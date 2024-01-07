import React, { FC, useState } from "react";
import type { TPaginationProps } from "./types";
import Btn from "@/ui/Btn/Btn";

export const Pagination: FC<TPaginationProps> = ({}) => {
    const [isActive, setIsActive] = useState<number>(0);
    return (
        <nav className="pagination-container">
            <Btn
                type="button"
                id="prev-button"
                className="pagination-button"
                aria-label="Previous page"
                title="Previous page"
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
                <Btn
                    type="button"
                    className="pagination-number"
                    title="Page 1"
                >
                    <span>1</span>
                </Btn>
                <Btn
                    type="button"
                    className="pagination-number"
                    title="Page 2"
                >
                    <span>2</span>
                </Btn>
                <Btn
                    type="button"
                    className="pagination-number"
                    title="Page 3"
                >
                    <span>3</span>
                </Btn>
                <Btn
                    type="button"
                    className="pagination-number"
                    title="Page 4"
                >
                    <span>4</span>
                </Btn>
                <Btn
                    type="button"
                    className="pagination-number"
                    title="Page 5"
                >
                    <span>5</span>
                </Btn>
            </div>
            <Btn
                type="button"
                id="next-button"
                className="pagination-button"
                aria-label="Next page"
                title="Next page"
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
