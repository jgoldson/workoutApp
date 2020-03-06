import React from "react";
interface Props extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
}> {
}
import { RouteComponentProps } from "react-router-dom";
export declare const CurrentWorkout: React.FC<Props>;
export {};
