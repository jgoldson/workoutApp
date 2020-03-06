import React from "react";
import { CurrentExcercise } from "../stores/WorkoutStores";
interface HistoryCardProps {
    header: string;
    currentExcercises: CurrentExcercise[];
    onPress: () => void;
}
export declare const HistoryCard: React.FC<HistoryCardProps>;
export {};
