import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Search from "../../../../components/search";

const searchDiv = () => {
  return (
    <View style={styles.searchDiv}>
      <View style={styles.userWrapper}>
        <Text style={styles.user}>Hi Manoj</Text>
        <Text style={styles.userMessage}>Welcome back</Text>
      </View>
      <Search />
    </View>
  );
};

export default searchDiv;

const styles = StyleSheet.create({
  searchDiv: {
    flex: 1,
  },
  userMessage: {
    fontSize: 16,
    fontWeight: "500",
    color: "#3A3D5E",
  },
  userWrapper: { flex: 1 },
  user: {
    fontSize: 24,
    fontWeight: "500",
    color: "#3A3D5E",
    marginTop: 10,
  },
});
