export type T_TableProps = {
    wrapperClass: string;
    tableClass: "table" | `table ${string}` | "assets-table" | "history-table" | "watchlist-table" | "";
    children: React.ReactNode;
};

export type T_TableHeadProps = {
    children: React.ReactNode[];
}

export type T_TableBodyProps = {
    children: React.ReactNode[];
}