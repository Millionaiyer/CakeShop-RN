import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

const HeroSection = () => {
  return (
    <View style={styles.Hero}>
      <Text style={styles.HeroText}>Top Rated</Text>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 30 }}>
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
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  Hero: {
    flex: 3,
    gap: 20,
  },
  HeroText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    marginBottom: 20,
  },
  cakeShowcase: {
    flexDirection: "row",
    gap: 20,
  },
});
