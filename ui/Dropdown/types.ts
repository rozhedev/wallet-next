export type DropdownClassNames = {
    dropdown?: string;
    dropdownBody?: string;
    dropdownButton?: string;
};

export type DropdownProps = {
    children?: React.ReactNode;
    className?: DropdownClassNames;
};

export type DropdownBtnProps = {
    children?: React.ReactNode;
    className?: DropdownClassNames;
};

export type DropdownMenuProps = {
    children?: React.ReactNode;
    className?: DropdownClassNames;
    transition?: number;
};

export type DropdownLinkProps = {
    href: `/${string}`;
    label: string;
    className: `navlink${"" | " js-modal-open"}`;
    svgIcon?: React.ReactNode;
};
