import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const Footer = ({ navigation }) => {
  const data = [
    {
      id: 1,
      screen: "Home",
      icon: require("../../assets/images/footer/home2.png"),
      name: "Home",
    },
    {
      id: 2,
      screen: "Category",
      icon: require("../../assets/images/footer/category.png"),
      name: "Category",
    },
    {
      id: 3,
      screen: "Cart",
      icon: require("../../assets/images/footer/cart.png"),
      name: "Cart",
    },
    {
      id: 4,
      screen: "Profile",
      icon: require("../../assets/images/footer/profile.png"),
      name: "Profile",
    },
  ];
  return (
    <View style={styles.footerMain}>
      <View style={styles.footerIconsWrapper}>
        {data.map((items) => {
          return (
            <Pressable
              key={items.id}
              style={styles.footerIcon}
              onPress={() => navigation.navigate(items.screen)}
            >
              <Image source={items.icon} />
              <Text style={{ marginTop: 3 }}>{items.name}</Text>
            </Pressable>
          );
        })}
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
