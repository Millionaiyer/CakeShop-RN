import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput placeholder="search" style={styles.searchInput} />
      <Image source={require("../../assets/images/searchButton.png")} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    borderColor: "#cfcfcf",
    borderRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    width: "80%",
    paddingHorizontal: 10,
  },
});
