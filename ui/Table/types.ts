export type T_TableProps = {
    wrapperClass: "cabinet-card" | "";
    tableClass: "assets-table" | "history-table" | "watchlist-table" | "";
    children: React.ReactNode;
};

export type T_TableHeadProps = {
    children: React.ReactNode[];
}

export type T_TableBodyProps = {
    children: React.ReactNode[];
}