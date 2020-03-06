import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface FabProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  fab: {
    width: 40,
    height: 40,
    backgroundColor: "pink",
    position: "absolute",
    bottom: 10,
    right: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    marginLeft: 2,
    marginBottom: 2
  }
});

export const Fab: React.FC<FabProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};
