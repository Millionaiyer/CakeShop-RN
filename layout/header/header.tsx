import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/images/logo.png")} />
      <Image source={require("../../assets/images/hamburger.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    maxHeight: "auto",
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
});

export default Header;
