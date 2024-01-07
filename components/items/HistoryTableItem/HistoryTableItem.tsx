import React, { FC } from "react";
import type { THistoryTableItem } from "./types";

export const HistoryTableItem: FC<THistoryTableItem> = ({ order, operType, curName, amount, transactionStatus, transactionId, date, recipient }) => {
    return (
        <tr className="assets-table-item history-table-item">
            <td className="assets-table-item__counter">{order}</td>
            <td>
                <span>{operType}</span>
            </td>
            <td>
                <span>{curName}</span>
            </td>
            <td>
                <span>{amount}</span>
            </td>
            <td>
                <span>{transactionStatus}</span>
            </td>
            <td>
                <span>{transactionId}</span>
            </td>
            <td>
                <span>{date}</span>
            </td>
            <td className="history-table-item--recipient">
                <span>{recipient}</span>
            </td>
        </tr>
    );
};
