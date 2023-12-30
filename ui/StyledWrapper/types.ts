export type TStyledWrapper = {
    className: "cabinet-card" | `cabinet-card ${string}` | "form-wrapper" | `form-wrapper ${string}` | "btn-group" | `btn-group ${string}` | "form-controller" | `form-controller ${string}`;
    children: React.ReactNode | React.ReactNode[];
};
