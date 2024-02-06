import { TAllCurNotesScope } from "@/types/data/currencies";

type TModalStates = {
    send: boolean;
    get: boolean;
};

export type TSendCurProps = {
    modalId: `modal-send-${TAllCurNotesScope}`;
    formId: `send-${TAllCurNotesScope}-form`;
    pureAmount: number;
    isOpen: TModalStates;
    setIsOpenModal: React.Dispatch<React.SetStateAction<TModalStates>>;
};
