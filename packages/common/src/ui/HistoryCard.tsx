import React, { cloneElement } from "react";
import { Card } from "./Card";
import { CurrentExcercise } from "../stores/WorkoutStores";
import { Text } from "react-native";

interface HistoryCardProps {
  header: string;
  currentExcercises: CurrentExcercise[];
  onPress: () => void;
}

const excerciseShortName = {
  Squat: "SQ",
  Deadlift: "DL",
  "Bench Press": "BP",
  "Overhead Press": "OHP",
  "Barbell Row": "ROW"
};

export const HistoryCard: React.FC<HistoryCardProps> = ({
  header,
  currentExcercises,
  onPress
}) => {
  return (
    <Card onPress={onPress}>
      <Text>{header}</Text>
      {currentExcercises.map(ce => {
        return (
          <Text key={ce.excercise}>{`${
            excerciseShortName[ce.excercise as keyof typeof excerciseShortName]
          } ${ce.numSets}x${ce.reps} ${ce.weight}`}</Text>
        );
      })}
    </Card>
  );
};
