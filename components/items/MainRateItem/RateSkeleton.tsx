"use client";

import React, { FC } from "react";
import ContentLoader from "react-content-loader";

type TRateSkeletonProps = {
    uniqueKey: string;
    speed: number;
    width: number;
    height: number;
    bgColor: `#${string}` | "transparent";
    foregroundColor: `#${string}`;
    rectWidth: number;
    rectHeight: number;
    borderRadius: number;
};

const RateSkeleton: FC<TRateSkeletonProps> = ({ uniqueKey, speed, width, height, bgColor, foregroundColor, rectWidth, rectHeight, borderRadius }) => (
    <ContentLoader
        uniqueKey={uniqueKey}
        speed={speed}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor={bgColor}
        foregroundColor={foregroundColor}
    >
        <rect
            x="0"
            y="0"
            rx={borderRadius}
            ry={borderRadius}
            width={rectWidth}
            height={rectHeight}
        />
    </ContentLoader>
);

export default RateSkeleton;
