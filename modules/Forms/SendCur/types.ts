import { TAllCurNotesScope } from "@/types/data/currencies";

export type TSendCurProps = {
    modalId: `modal-send-${TAllCurNotesScope}`;
    formId: `send-${TAllCurNotesScope}-form`;
    isOpen: boolean;
    onCloseModal: () => void;
};
