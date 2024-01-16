import React, { FC } from "react";
import type { THistoryTableItem } from "./types";

export const HistoryTableItem: FC<THistoryTableItem> = ({ id, operType, curName, curSign, amount, transactionStatus, transactionId, date, recipient, isHistory, modifClass, svgIcon}) => {
    return (
        <>
            {isHistory ? (
                <tr className="assets-table-item history-table-item">
                    <td className="assets-table-item__counter">{id}</td>
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
            ) : (
                <div className={`dashboard-log-item ${modifClass}`}>
                    <div className="dashboard-log-item__type">
                        {svgIcon}
                        <span className="navlink">{operType}</span>
                    </div>
                    <div className="dashboard-log-item__info">
                        <div>{date}</div>
                        <div>
                            <span>To:</span>
                            <span className="dashboard-log-item__wallet">${recipient}</span>
                        </div>
                    </div>
                    <div className="dashboard-log-item__amount navlink">
                        <span className="dashboard-log-item__num">{amount}</span>
                        <span className="dashboard-log-item__cur-sign">{curSign}</span>
                    </div>
                </div>
            )}
        </>
    );
};
