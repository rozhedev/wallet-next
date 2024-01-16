import React, { FC, useState } from "react";
import type { TCopyBtnProps } from "./types";
import { copyToClipboardIcon, copyToClipboardSuccessIcon } from "@/data/pages/ui-icons";

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
                    {copyToClipboardSuccessIcon}
                    <span>{afterClickLabel}</span>
                </>
            ) : (
                <>
                    {copyToClipboardIcon}
                    <span>{beforeClickLabel}</span>
                </>
            )}
        </button>
    );
};
