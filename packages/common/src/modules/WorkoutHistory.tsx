import React from "react";
import { View, Text, FlatList } from "react-native";
import { observer } from "mobx-react-lite";
import { Button } from "react-native";
import { RootStoreContext } from "../stores/RootStore";
import { RouteComponentProps } from "react-router";
import { HistoryCard } from "../ui/HistoryCard";

interface WorkoutHistoryProps extends RouteComponentProps {}

import { StyleSheet } from "react-native";
import { CurrentExcercise } from "../stores/WorkoutStores";
import { Fab } from "../ui/fab";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  cardContainer: {
    flex: 1,
    padding: 10
  },
  container: {
    flex: 1
  }
});

export const WorkoutHistory: React.FC<WorkoutHistoryProps> = observer(
  ({ history }) => {
    const rootStore = React.useContext(RootStoreContext);

    const rows: Array<Array<{
      date: string;
      excercises: CurrentExcercise[];
    }>> = [];

    Object.entries(rootStore.workoutStore.history).forEach(
      ([date, excercises], i) => {
        if (i % 3 === 0) {
          rows.push([
            {
              date,
              excercises
            }
          ]);
        } else {
          rows[rows.length - 1].push({
            date,
            excercises
          });
        }
      }
    );

    return (
      <View style={styles.container}>
        <FlatList
          renderItem={({ item }) => (
            <View style={styles.row}>
              {item.map(({ date, excercises }) => (
                <View key={date} style={styles.cardContainer}>
                  <HistoryCard
                    onPress={() => {
                      const parts = date.split("-");
                      history.push(
                        `/workout/${parts[0]}/${parts[1]}/${parts[2]}`
                      );
                    }}
                    header={date}
                    currentExcercises={excercises}
                  />
                </View>
              ))}
              {item.length < 3 ? <View style={styles.cardContainer} /> : null}
              {item.length < 2 ? <View style={styles.cardContainer} /> : null}
            </View>
          )}
          data={rows}
          keyExtractor={item => item.reduce((pv, cv) => pv + " " + cv.date, "")}
        />
        <Fab
          onPress={() => {
            if (!rootStore.workoutStore.hasCurrentWorkout) {
              const {
                currentBarbellRow,
                currentBenchPress,
                currentDeadlift,
                currentOverheadPress,
                currentSquat
              } = rootStore.workoutStore;
              const emptySets = ["", "", "", "", ""];

              if (rootStore.workoutStore.lastWorkoutType === "b") {
                rootStore.workoutStore.currentExcercises.push(
                  {
                    excercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: [...emptySets],
                    weight: currentSquat
                  },
                  {
                    excercise: "Bench Press",
                    numSets: 5,
                    reps: 5,
                    sets: [...emptySets],
                    weight: currentBenchPress
                  },
                  {
                    excercise: "Deadlift",
                    numSets: 1,
                    reps: 10,
                    sets: ["", "x", "x", "x", "x"],
                    weight: currentDeadlift
                  }
                );

                rootStore.workoutStore.currentSquat += 5;
                rootStore.workoutStore.currentBenchPress += 5;
                rootStore.workoutStore.currentDeadlift += 5;
              } else {
                rootStore.workoutStore.currentExcercises.push(
                  {
                    excercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: [...emptySets],
                    weight: currentSquat
                  },
                  {
                    excercise: "Overhead Press",
                    numSets: 5,
                    reps: 5,
                    sets: [...emptySets],
                    weight: currentOverheadPress
                  },
                  {
                    excercise: "Barbell Row",
                    numSets: 1,
                    reps: 5,
                    sets: [...emptySets],
                    weight: currentBarbellRow
                  }
                );

                rootStore.workoutStore.currentSquat += 5;
                rootStore.workoutStore.currentOverheadPress += 5;
                rootStore.workoutStore.currentBarbellRow += 5;
              }
              /* If A then set to B otherwise set to A */
              rootStore.workoutStore.lastWorkoutType =
                rootStore.workoutStore.lastWorkoutType === "a" ? "b" : "a";
            }
            history.push("/current-workout");
          }}
        />
      </View>
    );
  }
);
