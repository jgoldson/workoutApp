import React from "react";

interface WorkoutCardProps {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
  onSetPress: (index: number) => void;
}

import { StyleSheet, View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { TouchableOpacity } from "react-native";
import { Card } from "./Card";
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#f8ece8"
  },
  circleText: {
    margin: "auto"
  },
  gray: {
    backgroundColor: "#f4f8e8"
  }
});

export const WorkoutCard: React.FC<WorkoutCardProps> = observer(
  ({ excercise, repsAndWeight, sets, onSetPress }) => {
    return (
      <View style={styles.cardContainer}>
        <Card>
          <View style={styles.topRow}>
            <Text style={styles.topRowText}>{excercise}</Text>
            <Text style={styles.topRowText}>{repsAndWeight}</Text>
          </View>

          <View style={styles.bottomRow}>
            {sets.map((set, index) => {
              if (set === "x") {
                return (
                  <View style={[styles.circle, styles.gray]} key={set + index}>
                    <Text style={styles.circleText}>X</Text>
                  </View>
                );
              }
              if (set === "") {
                return (
                  <TouchableOpacity
                    onPress={() => onSetPress(index)}
                    style={[styles.circle, styles.gray]}
                    key={set + index}
                  ></TouchableOpacity>
                );
              }
              return (
                <TouchableOpacity
                  onPress={() => onSetPress(index)}
                  style={styles.circle}
                  key={set + index}
                >
                  <Text style={styles.circleText}>{set}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Card>
      </View>
    );
  }
);
