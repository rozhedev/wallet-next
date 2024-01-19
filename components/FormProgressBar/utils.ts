const isMediumStep = (currentStepIndex: number, arrLenght: number) => currentStepIndex + 1 === arrLenght - 1;

export const getProgressBarWidth = (isFirstStep: boolean, isLastStep: boolean, currentStepIndex: number, arrLenght: number) => {
    let index: `${number}%` = "0%";
    if (isFirstStep) index = "0%";
    else if (isMediumStep(currentStepIndex, arrLenght)) index = "50%";
    else if (isLastStep) index = "100%";
    return index;
};

// * Classnames for multistep in RegisterWallet
export const getRegisterWalletClassNames = (isLastStep: boolean, currentStepIndex: number, arrLenght: number) => [
    `progress-step navlink _active`,
    `progress-step navlink ${isMediumStep(currentStepIndex, arrLenght) || isLastStep ? "_active" : ""}`,
    `progress-step navlink ${isLastStep ? "_active" : ""}`,
];
