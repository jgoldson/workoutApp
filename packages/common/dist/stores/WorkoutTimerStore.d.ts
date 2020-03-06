import dayjs from "dayjs";
export declare class WorkoutTimerStore {
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    measure(): void;
    startTimer(): void;
    stopTimer(): void;
    get percent(): string;
    get display(): string;
}
