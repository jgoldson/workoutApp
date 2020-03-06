import React from "react";
interface WorkoutCardProps {
    excercise: string;
    repsAndWeight: string;
    sets: string[];
    onSetPress: (index: number) => void;
}
export declare const WorkoutCard: React.FC<WorkoutCardProps>;
export {};
