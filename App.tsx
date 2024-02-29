import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Home />
      {/* <Profile /> */}
      {/* <Category /> */}
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
