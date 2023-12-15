import { HTMLInputTypeAttribute } from "react";

export type TInpProps = {
    type: HTMLInputTypeAttribute;
    className: string;
    disabled?: boolean;
    placeholder: string
    // formData: string;
    // onChange: React.ChangeEventHandler<HTMLInputElement>;
};
