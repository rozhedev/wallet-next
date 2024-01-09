import React, { FC, useState } from "react";
import type { TCopyBtnProps } from "./types";

export const CopyBtn: FC<TCopyBtnProps> = ({ className, beforeClickLabel, afterClickLabel, value }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    return (
        <button
            type="button"
            className={className}
            onClick={() => {
                navigator.clipboard.writeText(value);
                setIsCopied(true);
            }}
        >
            {isCopied ? (
                <>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M22.8572 41.143H4.57153V4.57153H41.143V22.8572" />
                        <path d="M59.4286 22.8572H22.8572V59.4286H59.4286V22.8572Z" />
                        <path d="M29.5715 38.7143L38.7144 47.8571L52.4287 34.1428" />
                    </svg>
                    <span>{afterClickLabel}</span>
                </>
            ) : (
                <>
                    <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M22.8572 41.143H4.57153V4.57153H41.143V22.8572" />
                        <path d="M59.4286 22.8572H22.8572V59.4286H59.4286V22.8572Z" />
                    </svg>
                    <span>{beforeClickLabel}</span>
                </>
            )}
        </button>
    );
};
