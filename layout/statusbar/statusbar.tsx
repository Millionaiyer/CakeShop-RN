import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Status = () => {
  return (
    <View style={styles.statusbar}>
      <StatusBar backgroundColor="#21468E" />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  statusbar: {
    paddingBottom: 10,
    color: "#fff",
  },
});
