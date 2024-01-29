import { RequiredPick } from "@/types/utils/utils";
import type { TModalProps } from "@/ui/Modal/index";

export type TWalletConnectProps = {
    // * Optional prop for forms inside modal
    setIsOpenModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TWCFieldset = {
    id: RequiredPick<TModalProps, "modalId">;
    icon: React.ReactElement;
    content: React.ReactNode | string | string[];
}


