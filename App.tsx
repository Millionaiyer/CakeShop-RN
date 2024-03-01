import { ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Status from "./layout/statusbar/statusbar";

export default function App() {
  return (
    <>
      <View style={styles.main}>
        <Status />
        <Header />
        <Home />
        {/* <Profile /> */}
        {/* <Category /> */}
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
});
