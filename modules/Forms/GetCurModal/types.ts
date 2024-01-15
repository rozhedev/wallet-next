import { TAllCurNotesScope } from "@/types/data/currencies";

export type TGetCurModalProps = {
    modalId: `modal-get-${TAllCurNotesScope}`;
    isOpen: boolean;
    onCloseModal: () => void;
};
