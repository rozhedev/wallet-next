import React, { FC } from "react";
import type { TCopyBtnProps } from "./types";
import { useCopyToClipboard } from "./useCopyToClipboard";
import { copyToClipboardIcon, copyToClipboardSuccessIcon } from "@/data/pages/ui-icons";

export const CopyBtn: FC<TCopyBtnProps> = ({ className, beforeClickLabel, afterClickLabel, value }) => {
    const [copiedText, copy] = useCopyToClipboard();

    return (
        <button
            type="button"
            className={className}
            onClick={() => {
                copy(value).catch((error) => {
                    console.error("Failed to copy!", error);
                });
            }}
        >
            {copiedText ? (
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
