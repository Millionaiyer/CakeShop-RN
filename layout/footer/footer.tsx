import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerMain}>
      <View style={styles.footerIconsWrapper}>
        <View style={styles.footerIcon}>
          <Image source={require("../../assets/images/hamburger.png")} />
          <Text>Home</Text>
        </View>
        <View style={styles.footerIcon}>
          <Image source={require("../../assets/images/hamburger.png")} />
          <Text>Category</Text>
        </View>
        <View style={styles.footerIcon}>
          <Image source={require("../../assets/images/hamburger.png")} />
          <Text>Cart</Text>
        </View>
        <View style={styles.footerIcon}>
          <Image source={require("../../assets/images/hamburger.png")} />
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerMain: {
    position: "absolute",
    bottom: 0,

    backgroundColor: "white",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      height: 20,
      width: 100,
    },
    shadowRadius: 10,
    elevation: 20,
  },
  footerIconsWrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  footerIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
