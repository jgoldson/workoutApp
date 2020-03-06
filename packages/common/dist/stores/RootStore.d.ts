/// <reference types="react" />
import { WorkoutStore } from "./WorkoutStores";
import { WorkoutTimerStore } from "./WorkoutTimerStore";
export declare class RootStore {
    workoutStore: WorkoutStore;
    workoutTimerStore: WorkoutTimerStore;
    constructor();
}
export declare const RootStoreContext: import("react").Context<RootStore>;
