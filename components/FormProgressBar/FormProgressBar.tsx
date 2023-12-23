import React, { FC } from "react";
import type { TFormProgressBarProps } from "./types";

export const FormProgressBar: FC<TFormProgressBarProps> = ({ progressBarStyle, countClassNames }) => {
    return (
        <ul className="progress-bar">
            <li
                className="progress-line-active"
                id="progress-line-active"
                style={{
                    width: progressBarStyle,
                }}
            ></li>
            {countClassNames.map((className, index) => (
                <li
                    key={index}
                    className={className}
                ></li>
            ))}
        </ul>
    );
};
