// * Libs - Types - Hooks - UI - Component - Modules - Data

import React, { lazy } from "react";
import Table from "@/ui/Table";
import TableHeaderTitle, { type T_TableHeaderTitle, assetsTableHeaderTitleArr } from "@/components/items/TableHeaderTitle";
import AssetsTableItem, { type TAssetsTableItem, assetTableItemArr } from "@/components/items/AssetsTableItem";

import SmallScreenNotice from "@/components/SmallScreenNotice";
import type { TAllCurNotesScope } from "@/types/data/currencies";

// * Layout
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";

export default function Assets() {
    return (
        <SectionLayout id="assets">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Supported assets"
            />
            <div className="page-inner">
                <SmallScreenNotice className="small-screen-notice" />
                <Table
                    wrapperClass="table-wrapper"
                    tableClass="assets-table"
                >
                    <Table.Head>
                        {assetsTableHeaderTitleArr.map((item: T_TableHeaderTitle) => (
                            <TableHeaderTitle
                                key={item.id}
                                id={item.id}
                                svgIcon={item.svgIcon}
                                title={item.title}
                            />
                        ))}
                    </Table.Head>
                    <Table.Body>
                        {assetTableItemArr.map((item: TAssetsTableItem<TAllCurNotesScope>) => (
                            <AssetsTableItem
                                key={item.id}
                                id={item.id}
                                order={item.order}
                                curIconPath={item.curIconPath}
                                curIconAlt={item.curIconAlt}
                                curName={item.curName}
                                iconPaths={item.iconPaths}
                            />
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </SectionLayout>
    );
}
