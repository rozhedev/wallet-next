import SectionLayout from "@/components/layout/SectionLayout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";

import Table from "@/ui/Table/index";
import TableHeaderTitle, { assetsTableHeaderTitleArr } from "@/components/items/TableHeaderTitle/index";
import AssetsTableItem, { assetTableItemArr } from "@/components/items/AssetsTableItem";

import type { T_TableHeaderTitle } from "@/components/items/TableHeaderTitle/index";
import type { TAssetsTableItem } from "@/components/items/AssetsTableItem/index";
import { TAllCurNotesScope } from "@/types/data/currencies";

export default function Assets() {
    return (
        <SectionLayout id="assets">
            <PageBreadcrumb
                homeElement={"Home"}
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Supported assets"
            />
            <div className="page-inner">
                <Table
                    wrapperClass=""
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
                                curIcon={item.curIcon}
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
