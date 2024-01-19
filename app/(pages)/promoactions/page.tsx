// * Libs - Types - Hooks - UI - Component - Modules - Data

import PromoactionsItem, { type TPromoactionsItem, promoactionsItemArr } from "@/components/items/PromoactionsItem";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";

export default function Promoactions() {
    return (
        <SectionLayout id="promoactions">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Promoactions"
            />
            <div className="page-inner">
                {promoactionsItemArr.map((item: TPromoactionsItem) => (
                    <PromoactionsItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        tags={item.tags}
                        btnLabel={item.btnLabel}
                        isLink={item.isLink}
                        linkHref={item.linkHref}
                    />
                ))}
            </div>
        </SectionLayout>
    );
}
