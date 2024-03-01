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
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
