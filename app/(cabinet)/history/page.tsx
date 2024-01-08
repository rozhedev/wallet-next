"use client";

import React from "react";
import Select from "@/ui/Select/Select";
import Table from "@/ui/Table";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";

import SmallScreenNotice from "@/components/SmallScreenNotice";
import TableHeaderTitle, { historyTableHeaderTitleArr } from "@/components/items/TableHeaderTitle";
import HistoryTableItem, { type THistoryTableItem, historyTableItemArr } from "@/components/items/HistoryTableItem";
import Pagination, { paginationBtnArr } from "@/components/Pagination";

import SectionLayout from "@/modules/layout/SectionLayout";
import { typeSelectOptions, currencySelectOptions, statusSelectOptions, dateSelectOptions } from "@/data/cabinet/history";

export default function History() {
    const isDataArrEmpty = historyTableItemArr.length === 0;

    return (
        <SectionLayout id="page-cab history">
            <div className="inner">
                <SmallScreenNotice className="small-screen-notice cabinet-card" />

                {/* // * FILTERS */}
                <StyledWrapper className="cabinet-card history-filters">
                    <p className="history-filters__label">Sort transactions by:</p>
                    <form
                        action=""
                        method="get"
                        className="history-filters__form"
                        id="history-filters"
                    >
                        <Select
                            className="select"
                            id="history-type-sort"
                            title="Sort by type"
                            options={typeSelectOptions}
                        />
                        <Select
                            className="select"
                            id="history-cur-sort"
                            title="Sort by currency"
                            options={currencySelectOptions}
                        />
                        <Select
                            className="select"
                            id="history-status-sort"
                            title="Sort by transaction status"
                            options={statusSelectOptions}
                        />
                        <Select
                            className="select"
                            id="history-status-sort"
                            title="Sort by transaction status"
                            options={dateSelectOptions}
                        />
                    </form>
                </StyledWrapper>

                {/* // * TABLE */}
                <StyledWrapper className="cabinet-card table-wrapper">
                    <Table
                        tableClass="table history-table"
                        wrapperClass=""
                    >
                        <Table.Head>
                            {historyTableHeaderTitleArr.map((item) => (
                                <TableHeaderTitle
                                    key={item.id}
                                    id={item.id}
                                    svgIcon={item.svgIcon}
                                    title={item.title}
                                />
                            ))}
                        </Table.Head>

                        {!isDataArrEmpty && (
                            <Table.Body>
                                {historyTableItemArr.map((item: THistoryTableItem) => (
                                    <HistoryTableItem
                                        key={item.id}
                                        id={item.id}
                                        order={item.order}
                                        operType={item.operType}
                                        curName={item.curName}
                                        amount={item.amount}
                                        transactionStatus={item.transactionStatus}
                                        transactionId={item.transactionId}
                                        date={item.date}
                                        recipient={item.recipient}
                                    />
                                ))}
                            </Table.Body>
                        )}
                    </Table>
                    {isDataArrEmpty && <span className="history-table--message navlink">No transactions yet</span>}
                    {!isDataArrEmpty && <Pagination btnsArr={paginationBtnArr} />}
                </StyledWrapper>
            </div>
        </SectionLayout>
    );
}
