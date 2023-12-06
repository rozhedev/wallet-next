import SectionLayout from "@/components/layout/SectionLayout";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import Table from "@/ui/Table/index";
import AssetsTableTitle, { assetsTableTitleArr } from "@/components/items/AssetsTableTitle/index";

export default function Assets() {
    return (
        <SectionLayout id="assets">
            <PageBreadcrumb
                homeElement={"Home"}
                separator={<> / &nbsp;</>}
                activeClass="breadcrumb-active"
                pageTitle="Supported assets"
            />
            <Table
                wrapperClass=""
                tableClass="assets-table"
            >
                <Table.Head>
                    {assetsTableTitleArr.map((item) => (
                        <AssetsTableTitle
                            key={item.id}
                            id={item.id}
                            svgIcon={item.svgIcon}
                            title={item.title}
                        />
                    ))}
                </Table.Head>
                {/* <Table.Body>
                    
                </Table.Body> */}
            </Table>
        </SectionLayout>
    );
}
