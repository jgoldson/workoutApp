import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface WorkoutTimerProps {
  onXPress: () => void;
  currentTime: string;
  percent: string;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#e8f4f8"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    flex: 1
  },
  x: {
    color: "#393F4B",
    fontSize: 25
  },
  timeText: {
    color: "#393F4B",
    fontSize: 25
  },
  progressBar: {
    height: 5,
    backgroundColor: "#9CADCE"
  }
});

export const WorkoutTimer: React.FC<WorkoutTimerProps> = ({
  onXPress,
  currentTime,
  percent
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXPress}>
          <Text style={styles.x}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
