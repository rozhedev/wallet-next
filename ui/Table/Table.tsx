import React, { FC } from "react";
import type { T_TableProps, T_TableHeadProps, T_TableBodyProps } from "./types";

export const Table = ({ children, wrapperClass, tableClass }: T_TableProps): JSX.Element => {
    return (
        <div className={`table-wrapper ${wrapperClass}`}>
            <table className={`table ${tableClass}`}>{children}</table>
        </div>
    );
};

// * thead part
const TableHead: FC<T_TableHeadProps> = ({ children }) => {
    return (
        <thead className="table__header">
            <tr>{children}</tr>
        </thead>
    );
};

Table.Head = TableHead;

// * tbody part
const TableBody: FC<T_TableBodyProps> = ({ children }) => {
    return <tbody>{children}</tbody>;
};

Table.Body = TableBody;
