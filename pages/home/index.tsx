import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SearchDiv from "./components/searchSection";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <View style={styles.main}>
      <SearchDiv />
      <HeroSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 15,
  },
});
