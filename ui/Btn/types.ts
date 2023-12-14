export type TBtnProps = {
    type: "submit" | "button";
    className: string;
    children: React.ReactNode;
    disabled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};
