import { UseFormHandleSubmit, FieldValues } from "react-hook-form";

export type TMultistep = {
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
    submitForm: (data: FieldValues) => Promise<void>;
    isSubmitting: boolean;
    currentStepIndex: number
    step: React.ReactElement;
    steps: React.ReactElement[];
    isFirstStep: boolean;
    isLastStep: boolean;
    back: () => void;
    formAction: string | ((formData: FormData) => void) | undefined;
    children?: React.ReactNode | React.ReactNode[];
    btnClassNames: `btn ${string}`;
    isRegister: boolean;
    haveProgressbar: boolean;
};
