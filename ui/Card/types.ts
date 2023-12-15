export type TCard = {
    className: "cabinet-card" | `cabinet-card ${string}` | "form-wrapper" | `form-wrapper ${string}`;
    children: React.ReactNode | React.ReactNode[];
    id?: string;
}
