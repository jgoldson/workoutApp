import React from "react";
interface WorkoutTimerProps {
    onXPress: () => void;
    currentTime: string;
    percent: string;
}
export declare const WorkoutTimer: React.FC<WorkoutTimerProps>;
export {};
