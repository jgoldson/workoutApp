import React from "react";
import { StyleSheet, View } from "react-native";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.wrapper}>
        <Routes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#e8f4f8",
    width: "100%",
    maxWidth: 425
  }
});
