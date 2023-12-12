import { TAccordionContentArr } from "@/components/FaqAccordion/index";

export type T_TabsWrapperProps = {
    contentArr: T_TabsBody;
};

export type T_TabsNavProps = {
    onClick: (id: number) => void;
    selectedTabId: number;
    tabsArr: T_TabsNavItemArr;
};

export type T_TabsNavItem = {
    id: number;
    className: "tabs__nav-item navlink" | `tabs__nav-item navlink ${string}`;
    label: string;
};

export type T_TabsNavItemArr = T_TabsNavItem[];

// export type T_TabsBodyItem = {
//     tabsBodyId: number;
//     accordionsArr: TAccordionContentArr;
// };

export type T_TabsBody = TAccordionContentArr[];
