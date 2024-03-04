import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

const HeroSection = () => {
  return (
    <ScrollView style={styles.Hero}>
      <Text style={styles.HeroText}>Top Rated</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.cakeShowcase}>
          <Image source={require("../../../../assets/images/cakeBlue.png")} />
          <Image source={require("../../../../assets/images/cakeGreen.png")} />
        </View>
        <View>
          <Image
            source={require("../../../../assets/images/discountBanner.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  Hero: {
    marginTop: 50,
    flexDirection: "column",
  },
  HeroText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginLeft: 20,
    marginBottom: 30,
  },
  cakeShowcase: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});
