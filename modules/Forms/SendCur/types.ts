import React from "react";
import { TAllCurNotesScope } from "@/types/data/currencies";
import { TBalanceModalStates } from "@/components/items/BalanceItem";

export type TSendCurProps = {
    modalId: `modal-send-${TAllCurNotesScope}`;
    formId: `send-${TAllCurNotesScope}-form`;
    pureAmount: number;
    isOpen: TBalanceModalStates;
    setIsOpenModal: React.Dispatch<React.SetStateAction<TBalanceModalStates>>;
};
