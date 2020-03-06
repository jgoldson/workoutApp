import React from "react";
import { View, Text, Button } from "react-native";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props
  extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
  }> {}

import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../stores/RootStore";
import { WorkoutTimer } from "../ui/WorkoutTimer";
import { RouteComponentProps } from "react-router-dom";
import dayjs from "dayjs";
import { ScrollView } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  scrollContainer: {
    padding: 10,
    marginBottom: 50
  }
});
export const CurrentWorkout: React.FC<Props> = observer(
  ({
    history,
    match: {
      params: { day, month, year }
    }
  }) => {
    const rootStore = React.useContext(RootStoreContext);
    React.useEffect(() => {
      return () => {
        rootStore.workoutTimerStore.stopTimer();
      };
    }, []);

    const isCurrentWorkout = !year && !month && !day;
    const dateKey = `${year}-${month}-${day}`;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.scrollContainer}
        >
          {(isCurrentWorkout
            ? rootStore.workoutStore.currentExcercises
            : rootStore.workoutStore.history[dateKey]
          ).map(e => {
            return (
              <WorkoutCard
                onSetPress={setIndex => {
                  rootStore.workoutTimerStore.startTimer();
                  const v = e.sets[setIndex];

                  let newValue: string;

                  if (v === "") {
                    newValue = `${e.reps}`;
                  } else if (v === "0") {
                    rootStore.workoutTimerStore.stopTimer();
                    newValue = "";
                  } else {
                    newValue = `${parseInt(v) - 1}`;
                  }

                  e.sets[setIndex] = newValue;
                }}
                key={e.excercise}
                excercise={e.excercise}
                repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
                sets={e.sets}
              />
            );
          })}
          <Button
            title="SAVE"
            onPress={() => {
              if (isCurrentWorkout) {
                rootStore.workoutStore.history[dayjs().format("YYYY-MM-DD")] =
                  rootStore.workoutStore.currentExcercises;
                rootStore.workoutStore.currentExcercises = [];
              }
              history.push("/");
            }}
          />
        </ScrollView>
        {rootStore.workoutTimerStore.isRunning ? (
          <WorkoutTimer
            percent={rootStore.workoutTimerStore.percent}
            currentTime={rootStore.workoutTimerStore.display}
            onXPress={() => rootStore.workoutTimerStore.stopTimer()}
          />
        ) : null}
      </View>
    );
  }
);
