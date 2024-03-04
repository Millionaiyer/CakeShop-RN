import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Search from "../../../../components/search";

const searchDiv = () => {
  return (
    <View style={styles.searchDiv}>
      <View style={styles.userWrapper}>
        <Text style={styles.user}>Hi Manoj</Text>
        <Text style={styles.userMessage}>Welcome</Text>
      </View>
      <Search />
    </View>
  );
};

export default searchDiv;

const styles = StyleSheet.create({
  userMessage: {
    fontSize: 16,
    fontWeight: "500",
    color: "#3A3D5E",
    marginTop: 5,
  },
  userWrapper: {},
  user: {
    fontSize: 24,
    fontWeight: "500",
    color: "#3A3D5E",
  },
  searchDiv: {
    flexDirection: "column",
    gap: 40,
  },
});
