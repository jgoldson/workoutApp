import { RootStore } from "./RootStore";
import { observable, computed } from "mobx";
import { persist } from "mobx-persist";

type WorkoutDay = "a" | "b";

export interface CurrentExcercise {
  weight: number;
  reps: number;
  numSets: number;
  excercise: string;
  sets: string[];
}

interface WorkoutHistory {
  [key: string]: CurrentExcercise[];
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @persist @observable currentSquat: number = 45;
  @persist @observable currentBenchPress: number = 45;
  @persist @observable currentOverheadPress: number = 45;
  @persist @observable currentDeadlift: number = 65;
  @persist @observable currentBarbellRow: number = 65;

  @persist @observable lastWorkoutType: WorkoutDay = "a";

  @persist("list") @observable currentExcercises: CurrentExcercise[] = [];

  @computed get hasCurrentWorkout() {
    return !!this.currentExcercises.length;
  }

  @persist("object") @observable history: WorkoutHistory = {};
}
