import React from "react";

export type T_ToastProps = {
    id: string;
    wrapperModif: `toast--${string}` | `toast--${string} ${string}`;
    icon: React.ReactElement;
    content: React.ReactNode;
};
