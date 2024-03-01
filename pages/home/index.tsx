import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Search from "../../components/search";
import SearchDiv from "./components/searchSection";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <View style={styles.main}>
      <SearchDiv />
      {/* search div end */}
      <HeroSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    flexDirection: "column",
    gap: 50,
  },
});
